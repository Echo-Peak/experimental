export default function lockBody(){

    return function(s ,elm){

        let state = true;
        let windowFocus = function(){
            state = true
        }
        let windowBlur = function(){
            state = false;


        }


        let lock = function(){

            if(state){
               document.body.style.overflow = 'hidden'
            }

        }
        let release = function(){
            document.body.style.overflow = 'initial'
        }

        elm[0].addEventListener('mouseenter' ,lock)
        elm[0].addEventListener('mouseleave' ,release)
        window.addEventListener('focus', windowFocus)
        window.addEventListener('blur', windowBlur)
    }
}
