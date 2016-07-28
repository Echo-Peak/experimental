export default function namespace() {
  window.cosmos = {};
  cosmos.info = {
    reloadCount: localStorage['reloadCount']
  };
  cosmos.modules = {};
  cosmos.noop = function() {}
  cosmos.debounce = function debounce(func, wait, immediate) {
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
  };
  cosmos.throttle = function throttle(fn, delay, context) {

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

  }
  cosmos.toArray = function(arrayLikeObjects) {

    return Array.prototype.slice.call(arrayLikeObjects)
  }

}
