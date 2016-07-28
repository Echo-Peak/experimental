export default function(){
  var store = {}

  return{
    get keys(){
      return Object.keys(store)
    },
    get length(){
      return Object.keys(store).length
    },
    add:function(key ,...args){
      store[key] = args
    },
    remove:function(key){
      store[key] = null;
      delete store[key];
    },
    get:function(key){
      return store[key]
    },
    ls:{
        get ls(){
          return JSON.parse(localStorage['app'])
        },
        update:function(key ,args){
          let x = JSON.parse(localStorage['app']);
           x[key] = args;
          localStorage['app'] = JSON.stringify(x);
        }

    },
    dom:function(){
      if(!store.hasOwnProperty('dom')){
        store.dom = {};
      }

      return{
        add:function(key , DOMElement){
          store.dom[key] = DOMElement;
        },
        get:function(key){
          return store.dom[key]
        },
        delete:function(key){

          store.dom[key] = null;
          delete store.dom[key];
        },
        get list(){
          return Object.keys(store.dom)
        }
      }
    }
  }
}
