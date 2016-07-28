export default class windowResizeEvent{
    constructor($mdUtil){

        const delay = 100;
        this.update = window.innerWidth;
        let self = this;
        this.listen = function(){
            //self.update = window.innerWidth;
            Concepts.stores.getStore('Proto').global.resize(window.innerWidth)
        }

        setTimeout(()=>{
          Concepts.stores.getStore('Proto').global.resize(window.innerWidth)
        },0)
        window.addEventListener('resize',$mdUtil.debounce(this.listen , delay ,true))
    }
}
