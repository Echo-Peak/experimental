let gulp = require('gulp');
let plumber = require('gulp-plumber');
let sassify = require('gulp-sass');
let concat = require('gulp-concat');
let jadeify = require('gulp-jade');
let path = require('path');
let child_process = require('child_process');
let server = require('browser-sync').create();
let watch = require('gulp-watch');
let Webpack = require('webpack');
let fs = require('fs');
let port = 8000;
let ui = false;
let notify = false;

let boolify = e => JSON.parse(e);
~process.argv.indexOf('-port') && (port = process.argv[process.argv.indexOf('-port')+1]);
~process.argv.indexOf('-ui') && (ui = boolify(process.argv[process.argv.indexOf('-ui')+1]));
~process.argv.indexOf('-notify') && (notify = boolify(process.argv[process.argv.indexOf('-notify')+1]));


function close(req , res ,next){
  console.log('ran');
  next();
}

gulp.task('init' ,['deps','jade' ,'scss' ,'webpack' ,'server' ,'watches']);

let jadePaths = [
  './src/index.jade',
  './src/components/**/*.jade'
];


gulp.task('deps',function(done){
  child_process.fork('./update-deps');
  done()
})
gulp.task('assets' ,assets);
//gulp.task('server' ,server);
gulp.task('scss' ,scss);
gulp.task('jade' ,_jadeify);
gulp.task('webpack',startWebpack);
gulp.task('watches',watches);

gulp.task('server' ,function(){
    server.init({
        server: './compiled',
        port: port,
        ui:{
          port:port + 1
        },
        middleware:[close],
        ui:ui,
        notify:notify
    });
});


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



function scss(done){
  console.log("sassing it up");
  return gulp.src(`src/components/**/*.scss`)
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(`./compiled`))
  .pipe(server.reload({stream:true}));
}

function _jadeify(done){
    let src = (_jadeify.src || jadePaths[0]);

    return  gulp.src(src)
    .pipe(plumber(plumberHandler(done)))
    .pipe(jadeify())
    .pipe(plumber())
    .pipe(gulp.dest('./compiled'))
    .pipe(server.reload({stream:true}))
}


function assets(){
  gulp.src(assets.src)
  .pipe(gulp.dest('compiled'))
  .pipe(browserSync.reload({stream:true}));
}

function watches(){


  watch(jadePaths , (e) =>{
    _jadeify.src = path.resolve(e.base ,e.relative);
    console.log('doing' ,_jadeify.src )
    gulp.start('jade');
  });

  watch('src/components/**/*.scss' ,(e) =>{ gulp.start('scss') });


  watch('src/res/**/*' ,(e) =>{
    assets.src = path.resolve(e.base ,e.relative);
    gulp.start('assets');
  });
 }

function startWebpack(done){

  Webpack(require('./webpack.config'),function(err,status){
     if(err){
         console.log('WEBPACK ERROR'.red)
     }

     console.log('webpack runing')
     server.reload();
 })
}
