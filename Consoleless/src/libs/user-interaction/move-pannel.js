import throttle from '../utils/throttle';
import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';
export default function(DOM){
  let getState= State();
  let enableMovePannel = false;
  let pannel =  DOM.ready.dom.pannel;
  let mousemove = function(event){
    throttle(function(){
      pannel.element.style.left =Math.round((event.clientX - pannel.movePannel.offsetWidth/2))+'px';
     pannel.element.style.top = Math.round((event.clientY - pannel.movePannel.offsetHeight/2)) +'px';
   },40);

  }



  pannel.movePannel.addEventListener('click',()=>{
        enableMovePannel =!enableMovePannel;

      if(enableMovePannel){
          pannel.movePannel.title = 'Click again to set';
          document.addEventListener('mousemove',mousemove);
      }else{
        pannel.movePannel.title = 'move this bar around';
          document.removeEventListener('mousemove',mousemove);

          getState.pannel.pos = [pannel.element.offsetTop , pannel.element.offsetLeft];
          MutateLocalStorage(getState)
      }
  });
}
