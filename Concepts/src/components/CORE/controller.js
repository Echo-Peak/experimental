export default function GLOBAL($scope , $state , $themes ,$rootScope ,$timeout , $mdUtil , windowResizeEvent){
   Concepts.stores.Proto('global' ,GLOBAL.prototype)
      let global = this;
      global.$theme ={}
  //cacheing events
      let broadcastCache = function(target , data){
          $timeout(function(){
              $scope.$broadcast('cache-event',data)
          });
      }
  $scope.$on('global-cache-event' ,broadcastCache);
  //cacheing events
  //------------------------------------------
  //window resize events  for screen handeling
      global.screen = {
          width:null,
          adjust: {}
      }




  //window resize events
  //--------------------
  // menu events & handleing menu placement





      let watch_window_and_menu_event = function(newValue){
          console.info(newValue)
          if(newValue && window.innerWidth > 1280){
              global.screen.adjust = {width:'84.30%' ,marginLeft:'300px'}
          }else{

          }


      }

      let resizeUI = function(bool , windowWidth){
        $timeout(function(){
                if(bool && windowWidth > 1280){
            console.log('should be ')
             global.screen.adjust = {width:'84.30%' ,marginLeft:'300px'}
          }else{
              global.screen.adjust = {width:'100%' ,marginLeft:'0%'}
          }
        })
      }

      let dynamicResizeUI = function(menuShouldOpen , windowWidth){

          if(windowWidth >= 1280 && menuShouldOpen){
              global.screen.adjust = {width:'84.30%' ,marginLeft:'300px'}
          }else{
              global.screen.adjust = {width:'100%' ,marginLeft:'0%'}
          }
      }

          //gets event from headerSettings controller > applyTheme
          //$scope.$on('global-$themeChange' ,setGlobal$theme);
//--new code


let menuShouldOpen =false; //placeholder for GLOBAL.prototype.resize(arg1)
GLOBAL.prototype.menuUpdate = (bool)=>{
  menuShouldOpen = bool;
  resizeUI(bool ,window.innerWidth); //

  $scope.$broadcast('menu-should-open',bool) //broadcast to entire app this event occours
}
GLOBAL.prototype.footerUpdate = (value)=>{

}
GLOBAL.prototype.resize = (windowWidth)=>{
  dynamicResizeUI(menuShouldOpen , windowWidth);//resizes UI dynamicly for responsive desgn
  $scope.$broadcast('window-resize-event' ,windowWidth); //useing this function to broadcast this event to rest of app
}
GLOBAL.prototype.scroll = (pageY)=>{
  $scope.$broadcast('scroll-event' ,pageY); //useing this function to broadcast this event to rest of app
}

GLOBAL.prototype.Broadcaster =(name ,value)=>{
  $scope.$broadcast(name,value)
}

$rootScope.$on('$stateChangeSuccess' ,function(){
    $scope.$broadcast('global.pageReady' , $state.current.data); //broadcast to entire app state has changed without error
});

GLOBAL.prototype.updateTheme = function(theme){ //this applys the styles to website

  $timeout(function(){
    global.$theme.color = theme.props.color;
    global.$theme.background = theme.props.background;
    global.$theme.accent = theme.props.accent;
  });

}



setTimeout(()=>{//developer info...gets all elements with ng-style atribute
    console.warn('Number of ng-styles/watchers for',document.querySelectorAll('*[ng-style]').length);
},2000);

}
