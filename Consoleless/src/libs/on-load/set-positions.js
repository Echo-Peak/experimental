import {consoleless} from '../prototype';
export default function(DOM , getStates){

  DOM.ready.dom.pannel.element.style.width = getStates.pannel.width + 'px';
  DOM.ready.dom.pannel.element.style.height = getStates.pannel.height + 'px';
  DOM.ready.dom.pannel.element.style.top = getStates.pannel.pos[0] + 'px';
  DOM.ready.dom.pannel.element.style.left = getStates.pannel.pos[1] + 'px';
  DOM.ready.dom.pannel.element.style.background = getStates.pannel.background;

  if(getStates.pannel.showTitle){
    DOM.ready.dom.pannel.title.style.display ='block';
  }else{
    DOM.ready.dom.pannel.title.style.display ='none';
  }
  DOM.ready.dom.display.element.style.width = getStates.display.width + 'px';
  DOM.ready.dom.display.element.style.height = getStates.display.height + 'px';
  DOM.ready.dom.display.element.style.top = getStates.display.pos[0] + 'px';
  DOM.ready.dom.display.element.style.left = getStates.display.pos[1] + 'px';
  DOM.ready.dom.display.element.style.background = getStates.display.background;
  DOM.ready.dom.styleEditor.element.style.transform = 'translate(20%, 50%) scale(0)';
  if(getStates.animations){

  }else{
    DOM.ready.dom.styleEditor.element.style.cssText = 'display:none';
  }
}
