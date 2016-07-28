export default function triggerMenuEvent($timeout){
  //Concepts.link.triggerMenuEvent = triggerMenuEvent.prototype
  return {
      restric:'E',
      replace:true,
      template:`
<div class="material-design-hamburger">
 <button class="material-design-hamburger__icon">
   <span class="material-design-hamburger__layer" ng-style="{'background':global.$theme.color.color}"></span>
 </button>
</div>
`,
      link:function(scope,elm){
          let flag = false;
         var changeClass = function(){
             flag = !flag
           var child;


             Concepts.stores.getStore('Proto').MenuDirective.update(flag);
             Concepts.stores.getStore('Proto').global.menuUpdate(flag);
             Concepts.stores.getStore('Proto').Overlay.adjustMargins(flag);

         //scope.$emit('toggle-menu-event' ,flag)
   child = this.childNodes[1].childNodes[1].classList;

           if (child.contains('material-design-hamburger__icon--to-arrow')) {
             child.remove('material-design-hamburger__icon--to-arrow');
             child.add('material-design-hamburger__icon--from-arrow');
           } else {
             child.remove('material-design-hamburger__icon--from-arrow');
             child.add('material-design-hamburger__icon--to-arrow');
           }
                 }

     elm[0].addEventListener('click',changeClass)

     }
  }

}
