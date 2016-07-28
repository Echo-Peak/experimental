class Store{
    
    
    constuctor(){
        this.$store = {}
    }
    @moot({test:'it works'})
    get(id){
        if(this.check(id)){
          return this.$store[id]  
        }else{
            console.error('no item in store with key:'+id);
            return;
        }
    }
    
    
    set(id ,data){
        let create = ()=> {
            this.$store[id] = data
        }
        let exists = function(){
            console.error(`key: ${id} already exists`);
            return;
        }
        this.check(id) ? exists() : create();
        
        
        
    }
    check(id){
        let checkId = function(item){
            if(id == item){
                return true;
            }else{
                return false
            }
        }
        
        Object.keys(this.$store).forEach(checkId)
    }


}
var $store = new Store();



function moot(obj){
    return function(target , _name ,desc){
        target.monkeys = {noop:function(){}}
        desc.value = function(name ,obj){
            return name + obj.test
        }
        return desc.value
    }
}

cosmos.store = $store;
module.exports = $store

