

module.exports = function(){
  window.socketIO = io.connect('http://localhost:3550');
  socketIO.on('connect', function(){
  console.log('Connected')
});
socketIO.on('reload', function(){
  window.location.reload()
});
}
