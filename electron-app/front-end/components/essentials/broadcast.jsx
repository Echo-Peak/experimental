export default function(eventBus ,_on){
  return function(id ,...args){

        eventBus[id] = args;
        _on(eventBus ,'broadcast')

  }
}
