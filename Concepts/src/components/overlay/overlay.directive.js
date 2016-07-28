
export default function overlay(menuFactory , DOMcache ,$timeout) {
    let animation ,closeButton , ui , innerContainer , column_elms;

    let canUseTween = false;
      try{
        window.TweenMax;
        canUseTween = true;
      }catch(e){
        canUseTween = false
      };
let data;
    let link = function(scope, elm, attr) {
      data = {
        close:elm[0].querySelector('#close'),
        inner:elm[0].children[0].children[0],
        columns:elm[0].children[0].children[0].children[0].children,
        ui:elm[0].children[0],

      }
        let animation = new TweenMax(data.ui ,0 ,{y:1000});
        //element.tweenmaxHide();//default state...closes overlay
        //scope.$on('menu-should-open',toggleMargins); //adjust margins for the overlay since menu is position fixed it will cover the overlay
        //scope.$on('overlay-column-adjust',columnsAdjust); //hides/shows columns that have any data in them

        //scope.$on('window-resize-event' ,fixMargin.bind(element)); //fixes overlay margins when window is resizing
        let element = {
          open:()=>{
              if(canUseTween){
                animation.play()
              }else{
              innerContainer.classList.remove('open');
              elms.classList.add('open');
              }
          },
          close:()=>{
            if(canUseTween){
              animation.reverse();
            }else{
              elms.classList.add('open');
            }
          },
          clear:()=>{

            if(window.innerWidth > 1450){
              console.log(elm)
              data.ui.style['margin-left'] = 110 +'px'
            }else{
              data.ui.style['margin-left'] = 0 +'px'
            }
          },
          adjust:()=>{
            if(window.innerWidth > 1450){
              data.ui.style['margin-left'] = '0px';
            }
          }
        }

        element.close();//default to hidden
      scope.$on('overlay-will-open',()=>{
        element.open()
      });
      scope.$on('overlay-adjust-margins',(target ,bool)=>{
        //bound to menu toggleMargins
        bool ? element.clear() : element.adjust();
      })
      data.close.addEventListener('click',function(){
          element.close()
      });

    }
    return {
        //replace:true,
        restric: 'E',
        link: link,
        templateUrl:'overlay/index'
    }
}
