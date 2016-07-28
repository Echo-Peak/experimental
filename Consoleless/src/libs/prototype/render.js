import State from '../pre-load/state';
export default function (html){
  let context = Consoleless || Consoleless.context
  let injectToDisplay = this.DOM.display.inject;
  let elm = injectToDisplay.appendChild(html);
  this.DOM.display.title.style.display = 'none';
  context.que.push(elm);
this.DOM.display.element.scrollTop = this.DOM.display.inject.offsetHeight;
  context.destroy = setInterval(()=>{


    let newState = State();
      if(context.que.length){

  
          if(newState.animations){

            context.que[0].className= 'Consoleless-display-fade';
          }else{
            context.que[0].style.display ='none';
          }

        context.que.splice(0,1)
        if(context.que.length === 0){
          let cleanup = injectToDisplay.innerHTML = '';
          context.DOM.display.title.style.display = 'inline-block';
          clearInterval(context.destroy)
        }
      }
    },context.delay);

}
