var gulp = require('gulp');
var config = require('./gulp-config');
var backup = require('./backup');
var setup = require('./setup');

gulp.task('default' ,function(){
    console.log('gulp is working')
});

gulp.task('build',['INIT' , 'backup'],function(){

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
        /*
        backups every 5 mins and archived backups every 90 mins
        @param1 {filename} string
        @param2 {backup source} object
        @param3 {backup destination} string
        @param4 {immediate} boolean
        */
        backup.backup(setup.filename,setup.backupSRC , setup.backupDEST ,false);
    }
})
