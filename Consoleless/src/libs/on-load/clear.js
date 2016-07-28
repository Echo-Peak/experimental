import {consoleless} from '../prototype';
export default function(DOM){
  DOM.ready.dom.display.clear.addEventListener('click',()=>{
    consoleless.clear();
  })
}
