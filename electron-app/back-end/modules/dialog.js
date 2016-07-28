const electron = require('electron');
var fs = require('fs');

module.exports = function(mainWindow){
// electron.dialog.showOpenDialog(mainWindow,{
//   title:'foo',
//   defaultPath:'./someApp',
//   filters:[
//     {name:'wads of glue',extensions:['DLL']},
//     {name:'the rest',extensions:['PAK']}
//   ]
// })
// electron.dialog.showMessageBox({
//   type:'error',
//   title:'fatal error',
//   message:'something happend',
//   detail:'i cant stand them',
//   defaultId:1,
//   buttons:[
//     'sip','cup','drink'
//   ]
// },function(buttonID){
//   mainWindow.webContents.send('ping', e);
// })

// electron.dialog.showMessageBox({
//   type:'info',
//   title:'fatal error',
//   message:'something happend',
//   detail:'i cant stand them',
//   defaultId:1,
//   buttons:[
//     'sip','cup','drink'
//   ]
// },function(buttonID){
//   mainWindow.webContents.send('ping',buttonID );
// })
electron.shell.moveItemToTrash(`C:/WEB PROJECTS/Gulp POWERED Apps/github/electron-quick-start/README.md`);
}
