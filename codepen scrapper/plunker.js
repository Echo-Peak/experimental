var http = require('http');
var list = require('./list');
var fs = require('fs');
var copy = list.slice(0);
var readline = require('readline');

var done ={};

// var stdin = process.stdin;
// stdin.setRawMode(true);
// stdin.resume();
// stdin.setEncoding( 'utf8' );



function makeRequest(nextItem , arr){
if(arr.length < 1){
  console.log('its done');
  console.log(done);
  return;

}
  var options = {
  host:'embed.plnkr.co',
  path:`/grbegoTH1PVlRoKcFSHa`,
  headers:{
    'Accept':'*/*',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
  }
}

var req = http.request(options , function(res){
  var content = '';
  //console.log(res)

  res.on('data',function(chunk){
    content += chunk.toString();
    //console.log(chunk.toString())
  });
  res.on('end',function(){

fs.writeFileSync('stuff.html'  ,content)

    console.log(`


      Keep? y/n

      ${content}

      `);
    });
  //
  //     let shift = arr.shift();
  //   stdin.on('data',function(key){
  //     if ( key === '\u0079' ) { // leter r
  //        done[nextItem] = {
  //          length:content.length,
  //          data:content
  //        }
  //
  //
  //        makeRequest(shift , arr);
  //      }else if(key === '\u006E'){ //n
  //        makeRequest(shift , arr);
  //      }
  //   })
  //
  //
  //
  // });
});

req.end()

}
let s = copy.shift()
makeRequest(s , copy);
