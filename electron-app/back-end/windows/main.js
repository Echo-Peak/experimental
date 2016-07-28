var electron = require('electron');
var path = require('path');
var net = require('net');
var windowHandler = require('./handler');

var DEV = (process.argv.indexOf('-dev') > 0 ) ? true : false;
module.exports = function(app ,IO){
  let mainWindow = new electron.BrowserWindow({
      width: 1200,
      height: 900,
      icon:'../res/musicIcon2.png',
      title:'music app'
    });
    windowHandler({main:mainWindow})
    mainWindow.loadURL('file://' + path.resolve(__dirname ,'../../front-end/index.html')); //can only pont to a file

    if(DEV){
      mainWindow.webContents.openDevTools();
    }


    mainWindow.on('closed', function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  mainWindow.on('blur',()=>{
  });


  mainWindow.webContents.on('did-finish-load', function() { //on fires automaticly
      mainWindow.webContents.send('ready', 'load');
    });
}
