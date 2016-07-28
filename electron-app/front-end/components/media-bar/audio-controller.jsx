var Path = require('path');
var fs = require('fs');

export let audio = {
  clock:null,
  counter:0,
  que:[],

  init:function(){
    lila.on('play' ,(m ,data)=>{

    });
    lila.on('next' ,(m ,data)=>{
        this.nextItem(data)
    });
    lila.on('previous' ,(m ,data)=>{
      this.previousItem(data) //{loading from this.que}
    });
  },
  load:function(pathOrDir){
    let path;
    let url = /som/;
    let item;
    let extentions = ['.mp3','.oog'];
    let self = this;
    let url = /^http/.test(pathOrDir);
    let fileTypes = /\.oog|\.mp3$/;

    if(url){
      file = pathOrDir;
    }else{
      if(fileTypes.test(pathOrDir)){
        fs.readdir(pathOrDir ,function(err ,data){
          if(err){
            console.log(err);
            return false
          }
          file = [];
          data.forEach((fileItem)=>{
            if(fileTypes.test(fileItem)){
              audioFiles.push(Path.resolve(pathOrDir ,fileItem));
            }
          })
        });
        process.nextTick(()=>{
          this.toggleClock(true);
          this.play(file)
        });

      }

    }


    return {
      play:this.play.bind(null,file),
      pause:this.pause.bind(null,this.que),
    }
  },
  play:function(file){
  let createAudio;
  let self = this;
    if(Array.isArray(file)){
      file.forEach(function(src){
        createAudio = new Audio();
        createAudio.src = src;
        self.que.push({src:src, audio:createAudio})
      });
    }else{
         createAudio = new Audio();
         createAudio.src = file
      this.que.push({src:file , audio:createAudio});

    }
    this.que[0].src.play();
  },
  pause:function(que){
    que[0].audio.pause();
  },
  nextItem:function(item){
      this.unload();
  },
  uload:function(){
    this.que[0].audio.pause();
    this.que[0].audo.src = '';
  },
  previousItem:function(item){

  },
  toggleClock:function(willRun){
    clearInterval(this.clock);

    this.counter = 0;
    let self = audio;
    let trackLength = this.que[0].audio.start(0) - this.que[0].audio.end(0) ;

    if(willRun){
      this.clock = setInterval(function()=>{
        self.counter++;
        lila.emit('playback-time',{
          elapsed:self.counter ,
          audo:self.que[0],
          currentTime:self.que[0].currentTime,
           trackLength:trackLength});
      },1000);
    }
  },
  localQue:function(){
    let ls = JSON.parse(localStorage['app']);

    if(ls.que.length){
      return ls.que
    }else{
      return false
    }
  }

}
audio.init();
