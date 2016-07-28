export default class Bridge{
    constructor($themes ,$store){
      Concepts.link.Bridge = Bridge.prototype
        this.menuStatus =null;
        this.overlayColumns_status = [];
        //header > ui > overlay toggle
        this.overlayStatus = null;

        this.cache = {
            flush:null,
            clear:function(){
                $store.removal();
                console.warn('cleared cache')
            }
        }

        //used by header > settings controller & custumThemeOverlay directive
        this.custumTheme ={
            status:false,
            toggle:function(){
                this.status = !this.status
            },
            save:function(data){
                //recvices data from  applyCustumTheme{function} from directive
                //sends to $themes with data
                $themes.applyUserTheme(data)
            }
        }
    }
    menu(){
        return this.menuStatus
    }
    updater(name, value){
      //will change in the futrue....expirementing...i know THIS IS NOT EFFIECIENT
      Concepts.link.global.Broadcaster(name ,value)

    }
}
