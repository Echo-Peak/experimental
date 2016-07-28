(function(){
   chromeApp.userUI = angular.module('userUI',[])
   .factory('ui.styles' ,function(){
        var userCustomStyles = {}    
       userCustomStyles.header ={color:'red' ,background:'#b006cb'}
        
       return userCustomStyles
   })
   
    
    
})()