(function setup(){
   window.chromeApp = {}
    chromeApp.util ={
        //use for trigger events once berfor or after a action
        debounce:function(callback, delay, immediate){
            	var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    !immediate && callback.call(context);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, delay);
                callNow &&  callback.call(context);
            };
        }, 
        throttle:function(callback, delay){
            var wait = false;        
            return function () {     
            if (!wait) {         
            callback.call();  
            wait = true;      
            setTimeout(function () { 
           
                wait = false; 
            }, delay);
        }
    }
        }
        
    }
       
    
   
   
})()