var gulp = require('gulp');
var gulpTasks = require('./gulp-config');
var backup = require('./backup');
var path = require('path');


var backupTo =  {
    zipped:'F:/website related/app backups/current/Generators/archive',
    unzipped:'F:/website related/app backups/current/Generators'
}
var backupSRC = './src/**/*';
gulp.task('default' , function(){
   console.log('Working...' )


});
gulp.task('build',['INIT' , 'backup'],function(){

  if(!process.env.blockConsole){

  }else{
      //if no errors from webpack compilation then clear console
    return process.stdout.write('\033c');
  }

})
var once = true;
gulp.task('backup' ,function(){
    if(once){
      once = !once;
      backup.backup(backupSRC , backupTo ,true);
    }
return
})
