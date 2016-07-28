
(function(){
     'use strict';
    

    
  
    chromeApp.CORE = angular.module('app' ,['ui.router' ,'ngMaterial' ,'ngAnimate' , 'ngAria' ,'Templates-&-Views' ,'headerTabview' ,'userUI'])
    .controller('globalController' ,['$scope','$interval','ui.styles',function($scope ,$interval ,uistyles){
        let global = this;
        
            var date;
        global.handel = new Date().toLocaleTimeString();
        
        console.warn(uistyles)
        //remove
            $interval(function(){
                  global.handel = new Date().toLocaleTimeString()
              },1000)
        global.style = uistyles || null
            
        
    }])
    .config(['$stateProvider','$urlRouterProvider',routes]);
    
    
    
    
    function routes(states , urlRoutes){
        urlRoutes.otherwise('/intro');
        
        states.state('intro' ,{
            url:'/intro',
            views:{
                'header@':{
                    templateUrl:'header.html'
                },
                'UI@':{
                   templateUrl:'intro.html' 
                },
                'footer@':{
                    template:'footer'
                }
            }
        })
        .state('apps' ,{
            url:'/apps',
            views:{
                 'header@':{
                    templateUrl:'header.html'
                }, 
                'UI@':{
                   templateUrl:'mainUI.html' 
                },
                'footer@':{
                    template:'footer'
                }
            }
        })
        
    }
    
    
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    

})();