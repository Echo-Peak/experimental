const fs = require('fs');
const path = require('path');
const deps = require('./deps');

const angularDeps = Object.keys(deps.angular);
const otherDeps = Object.keys(deps.other);

fs.readdir(__dirname+'/compiled' ,getDirList);
let stream;
let _contents_= '';

function createStream(depPath ,filename){
  stream = fs.createReadStream(depPath);
    stream.on('data' ,function(data){
      _contents_ += data.toString()
    });
    stream.on('end' ,function(){
      fs.writeFile(`./compiled/${filename}.js` ,_contents_ ,'utf8'  ,function(err){
        if(err){
          console.log(err)
        }

      });
    });
}



function firstRun(){
  angularDeps.forEach(function(file){
    let depPath = path.resolve(process.cwd() ,deps.angular[file]);
    createStream(depPath , file);
  })

}

function getDirList(err, dirlist){
  let withoutExt = dirlist.map(e => e.replace(/\.[a-z]+$/,''));

if(dirlist.length === 0){
    firstRun();
  }else{
    //ANGULAR DEPS
    angularDeps.forEach(function(filename ,index){

      if(~withoutExt.indexOf(filename)){return}
      console.log('Compiling -> ' ,filename);
      createStream(deps.angular[filename] ,filename);

    });
    //your deps

    otherDeps.forEach(function(filename){

      if(~withoutExt.indexOf(filename)){ return }
      console.log('Compiling -> ' ,filename);
      createStream(deps.other[filename] ,filename);

    });




  }



}
