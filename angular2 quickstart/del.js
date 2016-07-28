var robot = require('robotjs');

console.log(robot)

//Speed up the mouse.
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 100;
var width = screenSize.width/2;

let dir = ['up','left' ,'right','down' ,'top-left' ,'top-right' ,'bottom-left', 'bottom-right'];
setInterval(function(){
var x = screenSize.width/2;
var y = screenSize.height/2;

let rand = dir[Math.floor(Math.random()*dir.length)];
console.log('sdab')
switch(rand){
  case 'up':{
      for (var k = 0; k < 100; k++){
        y--;

      robot.moveMouse(x, y);}
      k = 0;
  };break;
  case 'down':{
      for (var k = 0; k < 100; k++){
        y++;

      robot.moveMouse(x, y);}
      k = 0;
  };break;
  case 'up':{
      for (var k = 0; k < 100; k++){
        y--;
        x++;
      robot.moveMouse(x, y);}
      k = 0;
  };break;
  case 'right':{
      for (var k = 0; k < 100; k++){

        x++;
      robot.moveMouse(x, y);}
      k = 0;
  };break;
  case 'left':{
      for (var k = 0; k < 100; k++){

        x--;
      robot.moveMouse(x, y);}
      k = 0;
  };break;




  case 'top-right':{
      for (var k = 0; k < 100; k++){
        y++
        x++;
      robot.moveMouse(x, y);}
      k = 0;
  };break;

  case 'top-left':{
      for (var k = 0; k < 100; k++){
        y--
        x--;
      robot.moveMouse(x, y);}
      k = 0;
  };break;

  case 'bottom-right':{
      for (var k = 0; k < 100; k++){
        y++;
        x++;
      robot.moveMouse(x, y);}
      k = 0;
  };break;

  case 'bottom-left':{
      for (var k = 0; k < 100; k++){
        y++;
        x--;
      robot.moveMouse(x, y);}
      k = 0;
  };break;

  }
k = 0
},100);

setTimeout(function(){
process.exit()
},20000);



// setInterval(function(){
//   robot.mouseClick()
// },0);
// setTimeout(function(){
//   process.exit()
// },60000);
