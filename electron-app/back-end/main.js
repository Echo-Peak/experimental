'use strict';
var net = require('net');
var path = require('path');
//var Server = net.connect(process.env.MYPORT);
const electron = require('electron');
const app = electron.app;
var child_process = require('child_process');
const ipcMain = electron.ipcMain; //use this instead of tcp server as it is a built in tcp server BUT i need a external tcp server for gulp

var tray = require('./modules/tray');
var dialog = require('./modules/dialog');
var tasks = require('./modules/create-task');
var WINDOW = require('./windows');
var fs = require('fs');


var client = net.createConnection({port:process.env.server});

client.on('data',(data)=>{
if(data.toString() === 'restart'){
  app.quit()

}
});
ipcMain.on('kill-app' ,function(){
  app.quit();
})


tasks.createTask(true ,app);



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function(){


  let main = WINDOW.main.apply(null ,[app,ipcMain]);


  tray.call()
  //dialog.apply(this,[main]);

});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
    client.write('kill')
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (WINDOW.main === null) {
    WINDOW.main.apply(null ,[app,ipcMain]);
  }

  app.on('will-quit' ,function(){
    client.write('kill')

  })
});
