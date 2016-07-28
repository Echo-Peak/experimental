export let utils = {
  debounce:function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate)
          func.apply(context, args);
        };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow){
        func.apply(context, args);
      }

      };
  },
  error:function(severity,msg){
    console[severity](msg);
    if(severity =='fatal'){
      throw new Error(msg)
    }
  },
  throttle:function throttle(fn, delay, context) {

    var wait = false;
    return function() {

      if (!wait) {
        fn.call(context
          ? this
          : null, arguments)
        wait = true;
        setTimeout(function() {
          wait = false
        }, delay)
      }

    }

  },
//  http:
//  async:
  toArray:function(arrayLikeObjects) {

    return Array.prototype.slice.call(arrayLikeObjects)
  },
  addFunctionality(name ,fn){
    let self = utils;
    var keys = Object.keys(utils);
    if(typeof name === 'string' && typeof fn === 'function'){
        keys.forEach((key)=>{
      if(key === name){
        console.error('cant create fuctionallity')
        return false
      }
    });
    self[name] = fn;
    }else{
      self.error('warn', 'invaild name or function')
      return false
    }



  }


}
