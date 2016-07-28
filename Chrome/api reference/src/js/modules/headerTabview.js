(function headerModule(){
   chromeApp.headerTabview = angular.module('headerTabview',[])
   .controller('headerController' ,[ '$scope', 'tabHandeler', function($scope ,tabHandeler){
       let header = this;
       header.closeTab = function(self , event){
           console.log('me was clicked' ,self ,event)
       }
       
       header.handleTabs = function(){
            let tabs = ['Chrome.window']
            
            
            return tabs[0]
       }
       header.cachedTabs = function(){
           
       }
   }])
   .service('tabHandeler' ,function(){
       
   })
   .directive('windowTab' ,function(){
       return{
           restrict:'E',
           replace:true,
           template:`<div class='TAB' ng-mouseenter='hover = true' ng-mouseleave='hover = false'>
                    <section class='img-container'>
                    <i class='fa fa-facebook'></i>
</section>
            <span class='text' ng-bind='header.handleTabs()'></span>


            <span class='fa fa-times-circle close' ng-click='header.closeTab(this ,$event)'>
            <md-tooltip>Close</md-tooltip>
            </span>


            </div>`
       }
   })

})()


var flag = false;
var oopy = document.querySelectorAll('*');
    console.log(oopy)
for(var i =0; i<oopy.length; i++){
    
    oopy[i].addEventListener('mouseenter',function(){
       oopy[i].style.background = 'blue' 
    });
      oopy[i].addEventListener('mouseleave',function(){
       oopy[i].style.background = 'red' 
    });
}




