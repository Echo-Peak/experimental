import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';
import {consoleless} from '../prototype';
export default function(DOM){

  let displayBackground = DOM.ready.dom.styleEditor.displayBackground.children[0];
  let opacity = DOM.ready.dom.styleEditor.opacity.children[0];
  let consoleDelay = DOM.ready.dom.styleEditor.consoleDelay.children[0];


  let rgb = /^rgb[(]\d{1,3},\d{1,3},\d{1,3}[)]/;
  let getState = State();

  DOM.ready.dom.styleEditor.applyStyles.addEventListener('click',()=>{//i know...

    if(rgb.test(displayBackground.value)){
      getState.display.background = displayBackground.value;
      MutateLocalStorage(getState);
      consoleless.update(function(){
      DOM.ready.dom.display.element.style.background = displayBackground.value;

    });
    }
    if(parseFloat(opacity.value) || parseInt(opacity.value)){
      getState.opacity = opacity.value;
      MutateLocalStorage(getState);

        consoleless.update(function(){
      let pannelBg = getState.pannel.background.match(/\d{1,3}/g);
      let displayBg = getState.display.background.match(/\d{1,3}/g);
      DOM.ready.dom.pannel.element.style.opacity = getState.opacity
      DOM.ready.dom.display.element.style.background = `rgba(${displayBg[0]}, ${displayBg[1]},${displayBg[2]} ,${getState.opacity})`;


    });
    }
    if(parseInt(consoleDelay.value)){

      getState.delay = consoleDelay.value;
      MutateLocalStorage(getState);
      consoleless.delay = consoleDelay.value
    }

  });
}
