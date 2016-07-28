(function(){

  function write(arg){
  document.write(`<script src=${arg}></script>`);
}


  try{
    write('https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react.js')
  }catch(e){
    write(require('react'))
  }

  try{
    write('https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom.min.js')
  }catch(e){
    write(require('react-dom'))
  }

  try{
    write('https://cdnjs.cloudflare.com/ajax/libs/react-router/2.3.0/ReactRouter.min.js')
  }catch(e){
    write(require('react-router'))
  }

  try{
    write('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.3/TweenMax.min.js')
  }catch(e){
    write(require('gsap'))
  }

})()
