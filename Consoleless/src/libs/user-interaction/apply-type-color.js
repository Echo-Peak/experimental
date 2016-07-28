import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';
import {consoleless} from '../prototype';

export default function(DOM){
  let types = DOM.ready.dom.styleEditor.types
  let mapKeys = Object.keys(types);
  let hex = /^#[a-f0-9]{3,6}/i;
  let rgb = /^rgb[(]\d{1,3},\d{1,3},\d{1,3}[)]/;
  let getState = State();
DOM.ready.dom.styleEditor.applyStyles.addEventListener('click',function(){

    mapKeys.forEach((item)=>{
    let getState = State();
    let colorMatch = hex.test(types[item].children[0].value) || rgb.test(types[item].children[0].value) ? true : false;
    if(colorMatch){

      getState.types[item] = types[item].children[0].value;
      MutateLocalStorage(getState);

    }else{
      return false
    }
  });
});

}
