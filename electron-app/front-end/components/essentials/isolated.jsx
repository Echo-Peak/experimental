import _localStorage from './local-storage';
export default function(){

  return {
    flushCache:function(){
       let keys = Object.keys(localStorage);
       keys.forEach((i)=> delete localStorage[i]);
       _localStorage();
    },
    eventBus:{}
  }
}
