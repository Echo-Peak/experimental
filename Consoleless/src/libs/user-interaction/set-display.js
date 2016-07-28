import MutateLocalStorage from '../utils/mutate-ls';
import State from '../pre-load/state';
export default function(elm ,mousemoveEventHandler){
  elm.addEventListener('click',function(){
let getState = State();
      document.removeEventListener('mousemove',mousemoveEventHandler);
      elm.style.transition = 'box-shadow 0.3s';
      elm.title = 'Consoleless';
      elm.style.zIndex = 5812;
      elm.style.cursor = 'default';
      elm.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.2)';

      getState.display.pos = [elm.offsetTop , elm.offsetLeft];
      MutateLocalStorage(getState)

  });
}
