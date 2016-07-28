var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sassify = require('gulp-sass');
var concat = require('gulp-concat');
var net = require('net');
var socketIO = require('socket.io');
var child_process = require('child_process');
var fs = require('fs');




process.env.socketIO = '3550';
process.env.server = '3555';

function consoleBeep(msg){
  process.stdout.write('\007' +msg );
}
function plumberHandler(done){

  return {
    errorHandler:function(err){
      consoleBeep((err.message).yellow);
      done(done);
    }
  }
}

var IO;

var client = net.connect(3555);
client.on('data',function(d){
  if(d.toString() === 'kill'){
    process.exit(0)
  }
  if(d.toString() === 'reload'){
    IO.emit('reload')
  }
});

var willKill = false;
function kill(){
  //process.exit()
}
gulp.task('init' ,['spawn-server' ,'create-local-client','electron' ,'final']);


gulp.task('spawn-server',function(done){

if(process.argv.indexOf('-child') == -1){
  child_process.execSync('start cmd /k node utils/server.js',kill);
  child_process.execSync('start cmd /k webpack --config webpack.config.js'); //needs to be this way since this file gets exicuted multiple times
}
IO = socketIO.listen(process.env.socketIO);

done()
});


var sock;

gulp.task('create-local-client' ,function(done){

  IO.on('connection',(sock)=>{
    sock.emit('connect');
  });

  done();
});

gulp.task('electron',function(done){
  child_process.exec('electron back-end/main.js',function(){



  });
  done();
});

gulp.task('reload',function(done){
  console.log('reloading')

  IO.emit('reload')
  done()
});



gulp.task('restart',function(done){

  client.write('restart');

  done();
  process.exit(0)



});
gulp.task('sass',function(done){
  var stream = gulp.src('./front-end/components/**/*.scss')
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./front-end'));
stream.on('end' ,function(){
  IO.emit('reload')
  done()
})

});





gulp.task('final' ,function(){
  gulp.watch('./front-end/components/**/*.scss' ,['sass'])
  gulp.watch(['./front-end/index.html' ,'./front-end/views/*.html' ] ,['reload']);
  gulp.watch('./front-end/res/**/*' ,['reload']);

  gulp.watch('./back-end/**/*' ,['restart']);
});

process.on('SIGTERM',function(){
  client.write('kill');
  process.exit(0)
})
