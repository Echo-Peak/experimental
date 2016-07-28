import MutateLocalStorage from '../utils/mutate-ls';
import throttle from '../utils/throttle';
export default function(DOM , getState){
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
        pannel.element.style.transition ='box-shadow .4s';
          pannel.movePannel.title = 'Click again to set';
          pannel.element.style.boxShadow = '0px 0px 50px rgb(53, 131, 56)';
          document.addEventListener('mousemove',mousemove);
      }else{
        pannel.element.style.transition ='box-shadow .4s';
        pannel.movePannel.title = 'move this bar around';
        pannel.element.style.boxShadow = '0px 0px 20px rgba(53, 131, 56 ,0.8)';
          document.removeEventListener('mousemove',mousemove);

          getState.pannel.pos = [pannel.element.offsetTop , pannel.element.offsetLeft];
          MutateLocalStorage(getState)
      }
  });
}
