import State from '../pre-load/state';
export default function(DOM){
  let toggleSettings = false;
  DOM.ready.dom.pannel.settings.addEventListener('click',()=>{ //toggles the settings ui
    toggleSettings =!toggleSettings;
      let newState = State();


    if(toggleSettings){
      if(newState.animations){
        DOM.ready.dom.settings.element.style.cssText = `transition:all ${newState.animationSpeed || 0.5}s; transform:translate(0%,0%) scale(1)`
      }else{
        DOM.ready.dom.settings.element.style.cssText = 'display:block';
      }
      DOM.ready.dom.settings.toggle.checked = newState.enabled;
      DOM.ready.dom.settings.showTitle.checked = newState.pannel.showTitle;
      DOM.ready.dom.settings.animations.checked = newState.animations;
      DOM.ready.dom.settings.bind.checked = newState.bindConsole;

    }else{
      if(newState.animations){
        DOM.ready.dom.settings.element.style.cssText = `transition:all ${newState.animationSpeed || 0.5}s; transform:translate(20%,50%) scale(0)`
      }else{
        DOM.ready.dom.settings.element.style.cssText ='display:none'
      }

    }
  });
}
