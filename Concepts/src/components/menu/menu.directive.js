export default function menuDirective(){
      Concepts.stores.Proto('MenuDirective' ,menuDirective.prototype)
      let target;
      let animation;
      let shouldUpdate = false;

      menuDirective.prototype.update = (bool)=>{
        shouldUpdate  = bool;
        updater()
      }
      function updater(){shouldUpdate ? element.show() : element.hide();}

    let element = {
      show:function(){
          try{
              animation.play()
          }catch(e){
              target.classList.add('open')
          }

      },
      hide:function(){
          try{
              animation.reverse()
          }catch(e){
              target.classList.remove('open')
          }
          }
          }

     function link(scope, elm ,attr , ctrl){
        target = elm[0].querySelector('.menu-container');
        animation = new TweenMax(target , 0 , {x:0});
        updater()
      }

      return{
          link:link,
          templateUrl:'menu/index',
          restric:'EA',
          controller:'menuController as menu'
      }
}
