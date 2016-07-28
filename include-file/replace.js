const path = require('path');
//let fileParser = require('./file-parser');

let extensions =['html' ,'json' ,'js' ,'txt'];
const newLines = /\n+|\r+?/gm;
module.exports = function(file ,fileDirectory){
    let self = this;

    let relitivePath = path.resolve(fileDirectory).split(/\\+/g);
    relitivePath.pop();
    let _dirPath = relitivePath.join('\\');
    let xxx = file.match(this.getOptions().keyword);


    let newFile = file.replace(this.getOptions().keyword , function(match ,capture , index){

      capture = capture.replace(/\\/g ,'');
      let parts = capture.split(/,/g);
      let filename = parts[0].replace(/[\"\'\`]/g ,'').trim();
      let ext = filename.split('.')[1];
      let formated;
      let lines;
      let options = {};

      try{
        options = (parts[1] !== void 0 && parts[1].length) && JSON.parse(parts[1]);
      }catch(e){
        self.stdout('warning' ,`Can not parse options as object at '${fileDirectory}:${index}'` ,'yellow');
      }

      if(extensions.indexOf(ext) < 0){
       self.stdout('error' ,`.${ext} is not yet supported, | ${fileDirectory}:${index}` ,'red')
        return `(null /*.${ext} is not yet supported. from ${fileDirectory.replace(/\\/g,'/')}:${index}*/)`;
      }
      switch(ext){
        case 'html':{
          lines = self.getFile(filename , _dirPath , options);
          let x = lines.trim().split(newLines).filter(e => e.length ? e : null);
          formated = '';
          x.forEach(function(line ,_index ,array){

            if(_index + 1 === array.length){
               formated += `'${line}'`;
             }else{
               formated += `'${line}'+\n`;
             }
          });


          return formated;
        }break;
        case 'json':{
          try{
            lines = self.getFile(filename , _dirPath , options);
            formated = JSON.parse(lines);

            return `'${JSON.stringify(formated)}'`
          }catch(e){
            self.stdout('error' ,`failed to parse ${filename}, | ${fileDirectory}:${index}` ,'red')
            return `(null /*Error parseing ${filename}. from ${fileDirectory.replace(/\\/g,'/')}:${index}*/)`;
          }


        }break;
        case 'txt':{
          formated = "";
          lines = self.getFile(filename , _dirPath , options);

           let x = lines.split(newLines).filter(e => e.length ? e : null);


          x.forEach(function(line ,index ,array){
            let escapedLine = line.replace(/'|"|`|\\/g,function(found){
              switch(found){
                case '`':{ return   '\\`'};break;
                case "'":{ return  '\\"'};break;
                case '\\':{ return  ''};break;
                case '"':{ return "\\'"};break;
              }
            });

            if(index + 1 === array.length){
               formated += `"${escapedLine}"`;
             }else{
               formated += `"${escapedLine}"+\n`;
             }
          });


          return formated
        }break;
        case 'js':{
          formated = self.getFile(filename , _dirPath , options);
          return formated
        }

      }
      return injectFile

    });

    return newFile.trim()
}
