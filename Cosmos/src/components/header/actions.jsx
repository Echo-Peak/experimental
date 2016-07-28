window.cosmos = window.cosmos || {};
export let actions_header = {
  /*
    @param{data} 'object'
    @param{willCache} 'boolean'
  */
  cache:function(data , willCache){
    //optional to cache the component
    willCache ? cosmos.store.set(data.id , data.data) : void 0;
  },
  updateTitle:function(callback){
    cosmos.store.on('viewTitle' ,callback)
  }

}
