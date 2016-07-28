let Emiter ={
    que:{},
    trigger:(id ,payload)=>{
       let keys = Object.keys(this.que)
        let que = this.que;
        if(~keys.indexOf(id)){
            console.error('duplicate evens name')
        }
        var event = new Event(id)
        event.detail = {payload}
        que[id] = event;
        document.addEventListener(event);
    },
    on:(id ,callback)=>{
        let keys = Object.keys(this.que);
        var self = this;
        keys.forEach(function(events ,index){
            document.dispatchEvent(self.que[id]).call(callback()) 
        });
    }
}




window.cosmos.eventer = Emiter;
module.exports = Emiter;