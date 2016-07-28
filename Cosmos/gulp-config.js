var gulp = require('gulp');
var Webpack = require('webpack');
var server = require('browser-sync').create();
var path = require('path');
var FS = require('fs');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var scssify = require('gulp-sass');
var webpackFile = require('./webpack.config.js');
var jade = require('gulp-jade');
var colors = require('colors');
var gulpif =require('gulp-if');
var history = require('connect-history-api-fallback');
var minifyCSS = require('gulp-minify-css');
process.env.MINIFY = false;
var minify = process.env.MINIFY;
var WATCH = true;

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

gulp.task('server' ,function(){
    server.init({
        server: './built',
        port: 6100,
        //allows react router routes to be save in history without reloading home/index route
        middleware:[history()],
        ui:{
          port:6150
        },

        ui:false,
        notify:false
    });
});

var deps = [
            'html' ,
            'injectFrameworks',

            'scss',
            'pushAssets',
            'webpack',
            'server',
            'watch'
           ];
gulp.task('INIT' ,deps);

gulp.task('html' ,function(){
    return gulp.src('./src/index.jade')
    .pipe(plumber(function(err){
      consoleBeep(err.message)
    }))
    .pipe(jade())
    .pipe(gulp.dest('./built'))
    .pipe(server.reload({stream:true}))
});


gulp.task('scss' ,function(done){

    return gulp.src('./src/components/**/*.scss')
    .pipe(plumber(plumberHandler(done)))
    .pipe(scssify())
    .pipe(concat('styles.css'))
    .pipe(gulpif(minify ,minifyCSS()))
    .pipe(gulp.dest('./built'))
    .pipe(server.reload({stream:true}))
});

var fontAwesome = '../../node_modules/font-awesome';

gulp.task('fa' ,function(){
  if(!FS.existsSync(path.resolve(__dirname,'built/assets/FA'))){
       return gulp.src([`${fontAwesome}/**/*`,`!${fontAwesome}/less{,/**}` , `!${fontAwesome}/scss{,/**}`])
            .pipe(gulp.dest('./built/assets/FA'));
    }
    return
});
gulp.task('pushAssets' ,['fa'],function(){
//exclude font awsome from assets since its a module
FS.readdirSync(path.resolve(__dirname,'src/assets'),function(err ,dir){
  if(dir.length){
    return gulp.src(['./src/assets/**/*'])
   .pipe(gulp.dest('./built'))
 }else{
   return;
 }
})


});

gulp.task('webpack' ,function(){
    Webpack(webpackFile,function(err,status){
       if(err){
           console.log('WEBPACK ERROR'.red)
       }

       console.log('webpack runing'.green)
       server.reload();
   })

});



gulp.task('injectFrameworks',function(){
  var react = '../../node_modules/react/dist/react.js';
  var reactDom = '../../node_modules/react-dom/dist/react-dom.js';
  var reactRouter = '../../node_modules/react-router/umd/ReactRouter.js';
  var gsap = '../../node_modules/gsap/src/minified/TweenMax.min.js';


  gulp.src([react , reactDom , reactRouter , gsap]).pipe(gulp.dest('./built/frameworks'))
});

gulp.task('watch' ,function(){
    //gulp.watch('./src/index.jade' ,['html'])
    gulp.watch('./src/components/**/*.scss' , ['scss'])
    //gulp.watch('./src/assets/img/**/*', ['pushAssets'])
});
