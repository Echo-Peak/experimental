const electron = require('electron');
const path = require('path');
var fs = require('fs');

module.exports = function(){

var x = new electron.Tray(path.resolve(__dirname,'../res/musicIcon2.png'));

console.log('foo')
var contextMenu = electron.Menu.buildFromTemplate([
  { label: 'Close', type: 'radio' }
]);
x.setToolTip('it stuff');
x.setContextMenu(contextMenu);
x.setToolTip('foo')
x.displayBalloon({
  title:'3',
  icon:path.resolve(__dirname,'../res/musicIcon2.png'),
  content:'334'
});


}
