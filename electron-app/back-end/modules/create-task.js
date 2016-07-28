

module.exports = {
  createTask:function(bool , app){
    if(bool){
        app.setUserTasks([
    {
    program:'C:/Program Files (x86)/Inkscape/inkscape.exe',
    title:'kill they 5' ,
    description:'this is a descp',
    iconPath:'C:/WEB PROJECTS/Gulp POWERED Apps/github/electron-quick-start/error32px.ico', //needs to be a .ico
    iconIndex:0 //REQUIRED OR IT THROWS ERROR
    },

    ]);
    return
    }
    return false

  }
}
