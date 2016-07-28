export default function debounce(func ,delay, immediate){
  let timeout;
	return function() {
		let context = this, args = arguments;

		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, delay);
		if (callNow) func.apply(context, args);
	};
}
let throttleWait = false;
export default function throttle(func, delay){

    let context = this, args = arguments;
    if(!throttleWait){
      func.call(context ,args);
      throttleWait = true;
        setTimeout(function(){
      throttleWait = false;
    },delay)
    }



}
