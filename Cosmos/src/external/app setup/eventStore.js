
var eventer = null;
export default class Store{
  constructor(){
    this.store = {};
    this.memorize = [];
    this.eventBus = {};

  }
  memorize(){

  }
  get(name){
    let keys = Object.keys(this.store);
    let exist;
    if(~keys.indexOf(name)){
      exist = this.store[name]
    }else{
      console.error(`no such item in store`);
    }
    return exist
  }
  set(id ,obj){
    let memoryCheck;
    if(typeof id == 'string' && obj.toString() == '[object Object]'){
        if(!Object.keys(obj).length){
          console.error(`empty object`);
        }
        this.store[id] = obj;
        let OA = Object.assign;
        let memory = OA({} ,this.store);

        this.memorize.push(memory);
    }else if(typeof obj !== 'object'){

      console.error(`arg2 is not a object`);
      return
    }
    return this
  }
  delete(id){
    //this.memorize(id)
    delete this.eventBus[id];
    delete this.store[id];
    return this;
  }
  on(id ,callback){
    if(eventer == 'broadcast'){
      var a = new CustomEvent(id ,{'detail':this.eventBus[id].detail})
      callback(a.detail)
    }else{
      document.addEventListener(id ,function(e){
        callback(e.detail)
      });

    }

}
  broadcast(id ,anyType){
    eventer = 'broadcast';
    let event = new CustomEvent(id, {detail:anyType});
    this.eventBus[id] = Object.assign({},{detail:anyType});

    setTimeout(function(){
      document.dispatchEvent(event)
    },0)
  }
emit(id ,anyType){

  var event = new CustomEvent(id , {'detail':anyType});

  this.eventBus[id] = event;
  document.dispatchEvent(event);
}

}
