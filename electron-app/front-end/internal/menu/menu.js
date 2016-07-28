var template = require('./template');
var electron = require('electron').remote;//NOTE working directory changes when requiring from other modules

module.exports = {
  addMenu:function(bool){
    if(bool){
      var x = electron.Menu.buildFromTemplate(template);
      Menu.setApplicationMenu(x);
    }
    return false
  },
  get foo(){
    console.log(__dirname)
  }
}
