const path = require('path');
const fs = require('fs');

//would check if file is ASCII  but may lead to an unessesary bottle neck when streaming 100+ chunks
module.exports = function(filename , _dirPath , options){
    let _path;
    let stream;
    // todo -> aync
      if(options.cwd){
        _path = path.resolve(process.cwd() ,options.cwd, filename);
      }else{
        _path = path.resolve(_dirPath , filename);
      }

      try{
        stream = fs.readFileSync(_path);

        if(stream === void 0){
          return `(null /*cant find \\'${filename}\\' at \\'${_dirPath.replace(/\\/g,'/')}\\'*/)`;
        }
        return stream.toString();
      }catch(e){

        this.getOptions().verboseLogging && this.stdout('error',`No such file. '${_path}'`,'red')
        return `(null /*ERROR no such file \\'${_path.replace(/\\/g,'/')}\\'*/)`;
      }
}
