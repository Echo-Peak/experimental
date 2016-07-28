import State from '../pre-load/state';
import applyTypeColors from './apply-type-color';
import applyBackground from './apply-background';
import setPannel from './set-pannel';
import setDisplay from './set-display';

export default function(DOM){
  let getState = State();
  let styleEditor = DOM.ready.dom.styleEditor.element;
  let toggle = false;

  if(!getState.animations){
    styleEditor.style.transform = '';
    styleEditor.style.display = 'none';
  }else{
    styleEditor.style.transition = 'all ' + (getState.animationSpeed || 0.5) +'s';
    styleEditor.style.transform = 'translate(20%,50%) scale(0)'
  }

DOM.ready.dom.pannel.styleEditor.addEventListener('click',()=>{
  toggle = !toggle;
let checkState = State().animations;
  if(toggle){
    if(checkState){
      styleEditor.style.cssText = `transition:all ${getState.animationSpeed || 0.5}s; transform:translate(0%,0%) scale(1)`;

    }else{
      styleEditor.style.cssText = 'display:block';
    }

  }else{
    if(checkState){
      styleEditor.style.cssText = `transition:all ${getState.animationSpeed || 0.5}s; transform:translate(20%,50%) scale(0)`
    }else{
      styleEditor.style.cssText = 'display:none';
    }

  }

});

applyTypeColors(DOM);
applyBackground(DOM.ready.dom);
setPannel(DOM ,getState);
setDisplay(DOM ,getState)
}
