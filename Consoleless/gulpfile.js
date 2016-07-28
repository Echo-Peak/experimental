var gulp = require('gulp');
var config = require('./gulp-config');
var Backup = require('./backup');
var setup = require('./setup');

gulp.task('default' ,function(){
    console.log('gulp is working')
});

gulp.task('build',['INIT' ,'backup'],function(){

//fires when all tasks are done and when webpack sucsessfuly compiled javascript
//otherwise it will not clear console on first start
  if(!setup.blockConsole){
    console.log('\033c');//clears console
  }

})

var once = true;
gulp.task('backup' ,function(){
    if(once){
        once = false;

// var backup = new Backup({
//   folderName:'SerpentJS',//name of folder to create in directory
//   every:5,//mins
//   archiveEvery:60,//mins
//   from:['./src/**/*','./spec/**/*'],//relative path
//   to:'F:/website related/app backups/current/SerpentJS',//can not be a relative path
//   archive:false,
//   immediate:true
// });

    }
})
