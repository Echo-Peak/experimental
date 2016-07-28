import MutateLocalStorage from '../utils/mutate-ls';
import {consoleless} from '../prototype';
export default function(DOM, state){
  let getState = state;

  DOM.ready.dom.styleEditor.setDisplay.addEventListener('click',function(){
console.log('3443' ,DOM ,state)
    let width = DOM.ready.dom.styleEditor.display.children[0];
    let height = DOM.ready.dom.styleEditor.display.children[1];


    if(parseInt(width.value)){
      getState.display.width = width.value;

      MutateLocalStorage(getState);
      consoleless.update(function(){
          DOM.ready.dom.display.element.style.width = getState.display.width+'px';
        });
    }
    if(parseInt(height.value)){
      getState.display.height = height.value;
      MutateLocalStorage(getState);
      consoleless.update(function(){
          DOM.ready.dom.display.element.style.height = getState.display.height+'px';
        });
    }
  });
}
