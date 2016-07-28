//dependencies
var gulp = require('gulp'),
    FS = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    webpackCONFIG = require('./webpack.config.js'),
    setup = require('./setup'),
    server = require('browser-sync').create();

//tools
var concat = require('gulp-concat'),
  cssMinify = require('gulp-minify-css'),
  htmlMinify = require('gulp-htmlmin'),
  plumber = require('gulp-plumber'),
  sassify = require('gulp-sass'),
  jadify =require('gulp-jade'),
  cacheify = require('gulp-cached'),
  ang = require('gulp-angular-templatecache'),
  colors = require('colors'),
  gulpChange = require('gulp-change'),
  gulpif = require('gulp-if');

gulp.task('server',function(){
    server.init({
        server: './built',
        port: 7900,
        ui: {
            port: 7900
        },
        online:true

    });
});

function consoleBeep(msg){
  console.log('\007'+msg)
}
function plumberError(done){
  return{
    errorHandler:function(err){
      consoleBeep((err).yellow)
      done(err);
    }
  }
}

var deps = ['webpack','html','scss','templates','webpack','watch','server'];
gulp.task('INIT',deps);


gulp.task('html' , function(){

  return gulp.src('./src/index.jade')
    .pipe(jadify())
    .pipe(plumber())
    .pipe(gulp.dest('./built'))
    .pipe(server.reload({stream:true}));
});

function calculateSize(msg){

  var msg = msg
  return function(content){
      var size =(content.length * 16) / (16*1024)
      console.log(`${msg}: ${size.toFixed(2)}kb`.yellow);
    return content
  }
}
gulp.task('templates' ,function(){

     return gulp.src(['./src/components/**/*.jade','./src/components/views/**/*.jade'])
    .pipe(jadify())
     .pipe(plumber())
    .pipe(gulpif(setup.minify,htmlMinify({collapseWhitespace: true})))
    .pipe(ang('template.js',{module:'templates',standalone:true ,
            transformUrl:function(url){
            return url.replace(/.html$/ ,'')
        }}))
    .pipe(gulpChange(calculateSize('template cache')))
    .pipe(gulp.dest('./built'))
    .pipe(server.reload({stream:true}));

});


gulp.task('scss' ,function(done){
    return gulp.src(['./src/index.scss', './src/components/**/index.scss'])
      //need to call plumberError because of a bug in plumber that stops stream?
    .pipe(plumber(plumberError(done)))
    .pipe(sassify())
    .pipe(concat('styles.css'))
    .pipe(gulpif(setup.minify,cssMinify()))
    .pipe(gulpChange(calculateSize('SCSS')))
    .pipe(gulp.dest('./built'))
    .pipe(server.reload({stream:true}));
});

//font-awsome
var fontAwesome = '../../node_modules/font-awesome';

gulp.task('FA' ,function(){
  if(!FS.existsSync(path.resolve(__dirname,'built/assets/FA'))){
    //exlude /less & /sscc
       return gulp.src([`${fontAwesome}/**/*`,`!${fontAwesome}/less{,/**}` , `!${fontAwesome}/scss{,/**}`])
            .pipe(gulp.dest('./built/assets/FA'));
    }
    return
});

gulp.task('assets' ,['FA'],function(){
  //fa is not a assets but is treated like a module
  gulp.src('./src/assets/**/*')
  .pipe(gulp.dest('./built/assets'))
});

gulp.task('webpack',function(){
  webpack(webpackCONFIG,function(err,status){
     if(err){
         console.log('WEBPACK ERROR'.red)
     }

     server.reload();
 })
});

gulp.task('injectFrameworks',function(){
  var angular = '../../node_modules/angular/angular.min.js';
  var angularAnimate = '../../node_modules/angular-animate/angular-animate.min.js';
  var angularAnimate = '../../node_modules/angular-aria/angular-aria.min.js';
  var angularMaterial = '../../node_modules/angular-material/angular-material.min.js';
  var angularMaterialCSS = '../../node_modules/angular-material/angular-material.min.css';
  var uiRouter = '../../node_modules/angular-ui-router/release/angular-ui-router.min.js';
  var gsap = '../../node_modules/gsap/src/minified/TweenMax.min.js';

  gulp.src([angular , angularMaterial , angularAnimate ,angularMaterialCSS, uiRouter ,gsap ]).pipe(gulp.dest('./built/frameworks'))
});
gulp.task('views',function(){
  gulp.src('./src/components/router/views/**/.jade')
  .pipe(plumber())
  .pipe(jadify())
  .pipe(gulp.dest('./built/views'))
});

gulp.task('watch',function(){
    gulp.watch('./src/index.jade' ,['html']);
    gulp.watch(['./src/components/router/views/**/*.jade','./src/components/**/*.jade'] ,['templates']);
    gulp.watch('./src/components/router/views/**/*.jade' ,['views']);
    gulp.watch('./src/components/**/*.jade' ,['templates']);
    gulp.watch('./src/components/router/views/**/*.jade' ,['views']);
    gulp.watch('./src/components/**/*.jade' ,['templates']);
    gulp.watch(['./src/components/router/views/**/index.scss','./src/components/**/index.scss' ], ['scss']); //not name sensitive!
    gulp.watch('./src/assets/**/*' , ['assets']);
});
