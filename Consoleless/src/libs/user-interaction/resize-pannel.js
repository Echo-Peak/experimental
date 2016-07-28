import MutateLocalStorage from '../utils/mutate-ls';
import {consoleless} from '../prototype';
export default function (DOM ,state){
  let getState = state
  DOM.ready.dom.styleEditor.setPannel.addEventListener('click',function(){

    let width = DOM.ready.dom.styleEditor.pannel.children[0];
    let height = DOM.ready.dom.styleEditor.pannel.children[1];


    if(parseInt(width.value)){
      getState.pannel.width = width.value;

      MutateLocalStorage(getState);
      consoleless.update(function(){
        DOM.ready.dom.pannel.element.style.width = getState.pannel.width+'px';
      });

    }

    if(parseInt(height.value)){
      getState.pannel.height = height.value;
      MutateLocalStorage(getState);
      consoleless.update(function(){
        DOM.ready.dom.pannel.element.style.height = getState.pannel.height+'px';

      });
    }
  });
}
