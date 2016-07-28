var electron = require('electron');
var socketIO = require('./socket-io');
var remote = electron.remote;
var Menu = remote.Menu;
var MenuItem = remote.MenuItem;
//var contextMenu =require('./contextMenu');
// var menu = require('./internal/menu/menu');
// var tabs = require('./internal/tabs');
var ipc = electron.ipcRenderer;
socketIO();


let rightClickPosition = null


const menuItem = Menu.buildFromTemplate([
    {
    label: 'Inspect Element 2',
    click: () => {
      remote.getCurrentWindow().inspectElement(rightClickPosition.x, rightClickPosition.y)
    }
  },
  {
  label: 'kill app',
  click: () => {
    console.log("s");
    ipc.send('kill-app')
  }
}
]);

console.log(menuItem)
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  rightClickPosition = {x: e.x, y: e.y}
  menuItem.popup(remote.getCurrentWindow())
}, false)
