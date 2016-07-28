window.cosmos = window.cosmos || {};
export let actions_sidebar = {
  /*
    @param{data} 'object'
    @param{willCache} 'boolean'
  */
  cache:function(data , willCache){
    //optional to cache the component
    willCache ? window.cosmos.store.set(data.id , data.data) : void 0;
  },
  resetVeiwTitle:function(home){
      cosmos.store.broadcast('viewTitle',home)
  }
}
