var gulp = require('gulp');
var zipify = require('gulp-zip')
var gulpif = require('gulp-if');
var color = require('colors');
var fs = require('fs');
var make = require('mkdirp');
var path = require('path');
var changed = require('gulp-changed');

 var BACKUP_INTERVAL = 300000;
 var FILE_NAME;
    function getDate() {

        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var newDate = new Date();
        var suffix;
        var getHour = newDate.getHours();

        getHour >= 12 ? suffix = 'PM' : suffix='AM'


        if (getHour > 12) {
            var formatShift = getHour - 12;
        }


        var fileFormat = weekday[newDate.getDay()] + ' ' +
         (formatShift || newDate.getHours()) + '.' +
         newDate.getMinutes() + suffix + ' ' + month[newDate.getMonth()] + ' ' +
          newDate.getDate() + 'th'

        return fileFormat

    }
  var counter = 0;

var backupService = {
  opt:null,

  time:{
    now:Date.now() + BACKUP_INTERVAL,
    get:function(){
      return new Date(this.now).getTime()
    }
  },
  logger:function(statements){
    console.log(statements)
  },

  clock:function(){

          var now = Date.now();
          if(this.time.get() < now){
              counter++;

              this.soft(now);
              this.time.now = now + BACKUP_INTERVAL;
              process.stdout.write('\033c');
              if(counter > 18){ //hear backups every time counter = 18 or 5mins * 18 -- 90mins
                  this.hard(now);
                  counter = 0;
              }
          }
  },
  soft:function(){
      var unzipped = this.opt.dest.unzipped;
      this.checkDir(unzipped);
      gulp.src(this.opt.src)
      .pipe(changed(unzipped,{
        hasChanged:changed.compareLastModifiedTime
      }))
      .pipe(gulp.dest(unzipped))
      .on('end' ,()=>{
        this.logger(('Soft back complete @ '+ new Date().toLocaleTimeString()).green )
      });
  },
  hard:function(){
    var zipped = this.opt.dest.zipped;
      this.checkDir(zipped);
      gulp.src(this.opt.src)
      .pipe(zipify( FILE_NAME+' '+getDate() +'.zip'))
      .pipe(gulp.dest(zipped))
      .on('end' ,()=>{
        this.logger(('Hard backup complete @'+ new Date().toLocaleTimeString()).yellow)
      });

  },
  checkDir:function(resolvePath){
    var self = this;
    fs.readdir(path.resolve(resolvePath) ,function(err){
        if(err){
            self.logger(('no such directory...creating directory @ '+ path.resolve(resolvePath)).red )
            make(path.resolve(resolvePath))
        }
    });

  },
  backup:function(projectName,src , dest ,imediate){
   FILE_NAME = projectName
    this.opt = {
      src:src,
      dest:{
        zipped:dest.zipped,
        unzipped:dest.unzipped
      },
      imediate:imediate
    };
    var now = Date.now() + BACKUP_INTERVAL;

this.logger(('backup service started, next update @ ' + new Date(now).toLocaleTimeString() ).bold.green);

this.logger(('hard backup is @ ' + new Date(Date.now()+300000*18).toLocaleTimeString() ).underline.yellow);
imediate ? this.soft() : void 0;
  setInterval(this.clock.bind(this) ,1000);
  }

}
module.exports = backupService
