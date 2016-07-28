'use strict';
var gulp = require('gulp');
var zipify = require('gulp-zip')
var gulpif = require('gulp-if');
var color = require('colors');
var fs = require('fs');
var make = require('mkdirp');
var path = require('path');
var changed = require('gulp-changed');
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

class Backup{
  constructor(options){
    this.options = options
    try{
      options.toString();
    }catch(e){
      throw new Error('got null expected object')
    }

    let _every = options.every > 0 ? options.every : 1;
    let _archiveEvery = options.archiveEvery && options.archiveEvery < 10 ? 10 : options.archiveEvery || 60;
    let _immediate = (typeof options.immediate === 'boolean') ? options.immediate : false;
    let _archivable = (typeof options.archive === 'boolean') ? options.archive : false;

    let mins = 60000;
    let self = this;

    function checkDest(){
        if(!fs.exists(self.options.to)){
        make(path.normalize(self.options.to+'/'+self.options.folderName));
        if(_archivable){
          make(path.normalize(self.options.to+'/ARCHIVE'));
        }

    }
    }
    checkDest()


    let every = ()=>{
      if(_immediate){
        _immediate = false;
          self.softBackup();
          setTimeout(every,_every*mins);
      }else{
        setTimeout(function(){
          every()
          self.softBackup();

        },_every*mins);
      }


    }
    every()

    let archiveEvery = ()=>{
      if(self.shouldArchive){

        setTimeout(function(){
          self.archivedBackup();
        }, _archiveEvery*mins);
      }
      return false
    }
    archiveEvery()



  }

  softBackup(){
    console.log('running...')
    gulp.src(this.options.from)
    .pipe(gulp.dest(this.options.to+'/'+this.options.folderName));
  }
  archivedBackup(){
    gulp.src(this.options.from)
    .pipe(zipify(this.folderName +' '+getDate()+'.zip'))
    .pipe(gulp.dest(this.options.to+'/ARCHIVE'));
  }

  logger(statements){
    console.log(statements);
    return false
  }

}
module.exports = Backup;
