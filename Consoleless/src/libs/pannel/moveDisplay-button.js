import throttle from '../utils';
import {userInteraction} from '../user-interaction';
export default function(DOM){

  let display = DOM.ready.dom.display;
  let moveDisplayHandler = function(event){

  throttle(function(){
    display.element.style.left =Math.round((event.clientX - display.element.offsetWidth/2))+'px';
    display.element.style.top = Math.round((event.clientY - display.element.offsetHeight/2)) +'px';
   },40);

  }


let toggleMove = false;
  DOM.ready.dom.pannel.moveDisplay.addEventListener('click',function(){
      display.element.style.transition = 'box-shadow 0.3s';
      display.element.title = 'Click again to set';
      display.element.style.zIndex = 5815;
      display.element.style.cursor = 'pointer';
      display.element.style.boxShadow = "0px 0px 50px rgba(53, 131, 56, 0.79)";
      document.addEventListener('mousemove',moveDisplayHandler);
  });
userInteraction.setDisplay(DOM.ready.dom.display.element , moveDisplayHandler)


}
