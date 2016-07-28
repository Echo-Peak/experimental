export default function(){
  this.que = [];
  this.DOM.display.inject.innerHTML ='';

  clearInterval(this.destroy);
  this.DOM.display.title.style.display = 'inline-block';
}
