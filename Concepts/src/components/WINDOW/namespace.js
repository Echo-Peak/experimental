import Store from './Store';
window.Concepts = {
  Modules:{},
  info:{
    http:{}
  },
  toArray:function(arrayLikeObject){
    //convert Array like objects to Array objects
    return Array.prototype.slice.call(arrayLikeObject)
  },
  validateObject:function(_object){
    if(typeof _object == 'object' && _object !== null){
      let objLength = Object.keys(_object);
      if(objLength.length){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  },
  info:{
      times_reloaded:localStorage.reloadCount,
      $themes_enabled:localStorage.$themeIsEnabled,
      current_theme:localStorage.$theme,

  },
  throttle: function (callback, delay , context) {
      var wait = false;
      var context = context;
      if(!context){
          context = null;
      }
      return function () {
          if (!wait) {
              callback.apply(null ,arguments);
              wait = true;
              setTimeout(function () {

                  wait = false;
              }, delay);
          }
      }
  },
  debounce: function (callback, delay, immediate) {
      var timeout;
      return function () {
          var context = this,
              args = arguments;
          var later = function () {
              timeout = null;
              !immediate && callback.call(context);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          callNow && callback.call(context);
      };
  },
  stores:new Store()
}




export let Concepts = window.Concepts
