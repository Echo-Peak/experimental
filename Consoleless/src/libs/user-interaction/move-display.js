import throttle from '../utils';
import MutateLocalStorage from './mutate-ls';
import State from '../pre-load/state';
let toggleMove = false;

export default function(DOM){
  let getState = State();
let display = DOM.ready.dom.display;
let moveDisplay = function(event){

throttle(function(){
  display.element.style.left =Math.round((event.clientX - display.element.offsetWidth/2))+'px';
  display.element.style.top = Math.round((event.clientY - display.element.offsetHeight/2)) +'px';
 },40);

}

  DOM.ready.dom.pannel.moveDisplay.addEventListener('click',function(){
    toggleMove  =!toggleMove;
    if(toggleMove){
      display.element.title = 'Click again to set';
      display.element.style.zIndex = 5820;
      display.element.style.outline = '10px solid rgba(255,0,0,0.2)';
      document.addEventListener('mousemove',moveDisplay);
    }else{
      display.element.title = '';
      display.element.style.outline = 'none';
      document.removeEventListener('mousemove',moveDisplay);
    }
  });
  display.element.addEventListener('click',function(){
    toggleMove = !toggleMove;
    document.removeEventListener('mousemove',moveDisplay);
    display.element.title = 'Consoleless';
    display.element.style.outline = 'none';
    display.element.style.zIndex = 5812;
    getState.display.pos = [display.element.offsetTop,display.element.offsetLeft];
    MutateLocalStorage(getState)

  })
}
