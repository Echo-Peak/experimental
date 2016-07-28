import State from '../pre-load/state';
export default function(DOM){
  let toggle = false;
  DOM.ready.dom.pannel.styleEditor.addEventListener('click',()=>{
    let getNewState = State();
    toggle = !toggle;
    console.log(toggle , getNewState.animations)
    if(toggle){
      if(getNewState.animations){
        DOM.ready.dom.styleEditor.element.style.cssText = `transition:all ${getNewState.animationSpeed || 0.5}s; transform:translate(0%,0%) scale(1)`;

      }else{
        DOM.ready.dom.styleEditor.element.style.cssText = 'display:block';
      }

    }else{
      if(getNewState.animations){
        DOM.ready.dom.styleEditor.element.style.cssText = `transition:all ${getNewState.animationSpeed || 0.5}s; transform:translate(20%,50%) scale(0)`
      }else{
        DOM.ready.dom.styleEditor.element.style.cssText = 'display:none';
      }
    }
  });
}
