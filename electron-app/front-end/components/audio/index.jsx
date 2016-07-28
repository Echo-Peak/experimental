var Path = require('path');
var fs = require('fs');

export let audio = {
  clock:null,
  counter:0,
  que:[],
  loop:false,
  init:function(){
    lila.on('play' ,(m ,data)=>{

    });
    lila.on('next' ,(m ,data)=>{
        this.nextItem(data)
    });
    lila.on('previous' ,(m ,data)=>{
      this.previousItem(data) //{loading from this.que}
    });
    lila.on('playback-pause' ,(m, bool)=>{
      this.pause(bool);
    });
    lila.on('loop' ,()=>{
      this.loop();
    });
    lila.on('seek' ,(m ,to)=>{
      this.seek(to);
    });

  },
  load:function(pathOrDir){
    let self = this;
    let url = /^http/.test(pathOrDir);
    let fileTypes = /\.oog|\.mp3$/;
    let file;

    if(url){
      file = pathOrDir;
    }else{
      if(fileTypes.test(pathOrDir)){

          fs.readdir(pathOrDir ,(err ,data)=>{
            if(err || data == undefined){
              console.warn(err ,data);
              file = Path.resolve(pathOrDir);

            }else{
            file = [];
            data.forEach((fileItem)=>{
              if(fileTypes.test(fileItem)){
                audioFiles.push(Path.resolve(pathOrDir ,fileItem));
              }
            })
            }
              process.nextTick(()=>{
                console.log('FILE' , file)
                   this.play(file);
                   this.toggleClock(true);
              });
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

        self.que.push({src:src, audio:createAudio});
      });
    }else{
         createAudio = new Audio();
         createAudio.src = file;

      this.que.push({src:file , audio:createAudio});

    }
    this.que[0].audio.play();
    console.log('PLAY', this.que[0].audio);

    this.que[0].audio.addEventListener('loadedmetadata' ,()=>{
      let trackLength = Math.floor(this.que[0].audio.seekable.start(0)  + this.que[0].audio.seekable.end(0));
      let mins = Math.floor(trackLength /60);
      let secs = trackLength - mins * 60;


      lila.broadcast('playback-length',{
        time:[mins ,secs],
        trackLength:trackLength
      });
    });
  },
  pause:function(bool){

    if(bool){
    this.que[0].audio.pause();
    this.toggleClock(false);
  }else{
    this.que[0].audio.play();
  this.toggleClock(true);
  }

  },
  nextItem:function(item){
      this.unload();
  },
  uload:function(){
    this.que[0].audio.pause();
    this.que[0].audo.src = '';
  },
  seek:function(seekNumber){
    this.que[0].audio.currentTime = seekNumber
  },
  previousItem:function(item){

  },
  loop:function(){
    if(this.loop){
      this.que[0].audio.loop = true;
    }else{
      this.que[0].audio.loop = false;
    }
  },
  toggleClock:function(willRun){
    clearInterval(this.clock);


    let self = this;
    let trackLength = 2 ;
    //console.log('TOGGLE CLOCK', this.que[0].audio.seekable )
    if(willRun){
      this.counter = 0;
      this.clock = setInterval(function(){
        self.counter++;
        lila.emit('playback-time',{
          elapsed:self.counter ,
          audo:self.que[0],
          currentTime:self.que[0].audio.currentTime});
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
