export default class scrollChangeEvent {
    constructor($mdUtil , $timeout){
        const delay = 200;
        this.status = window.pageYOffset;
        let self = this;


         this.listen = function(){
           Concepts.stores.getStore('Proto').global.scroll(window.pageYOffset);
           
            setTimeout(()=>{
              Concepts.stores.getStore('Proto').global.scroll(window.pageYOffset);
            },250); //offsets the delay by 50ms so that if the last window.pageYOffset is not acurate this will fix it
        }
      window.addEventListener('scroll' , $mdUtil.throttle(this.listen ,delay));

    }
}
