//dependencies
var gulp = require('gulp'),
    webpack = require('webpack'),
    setup = require('./setup'),
    path = require('path'),
    fs  =require('fs'),
    webpackCONFIG = require('./webpack.config.js'),
    exec = require('child_process').exec,
    os = require('os'),
    server = require('browser-sync').create();

//tools



gulp.task('server',function(){
    server.init({
        server: './built',
        port: 7908,

        ui: {
            port: 7909
        },
        online:true

    });
});

function consoleBeep(msg){
  console.log('\007'+msg)
}
function plumberError(done){
  console.log(done)
  return{
    errorHandler:function(err){
      if(err ==''){
        consoleBeep('Mocha test failed'.yellow)
      }else{
          consoleBeep((err).yellow)
      }


      done(err);
    }
  }
}

var deps = ['html','webpack','watch','server'];
gulp.task('INIT' ,deps,function(){});


gulp.task('html' , function(){

  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./built'))
    .pipe(server.reload({stream:true}));
});

gulp.task('webpack',function(){

  webpack(webpackCONFIG,function(err,status){
     if(err){
         console.log('WEBPACK ERROR'.red)
     }
     server.reload();
 })

});

gulp.task('watch',function(){
    gulp.watch('./src/index.html' ,['html']);
});
