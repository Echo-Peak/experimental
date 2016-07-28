export default function(eventBus ,type){

  return function(id ,callback){
    if(type == 'emit'){

    callback(eventBus[id])
    }else{

      setTimeout(()=>{
        if(eventBus[id].resolved){
          return
        }else{

          callback(eventBus[id])
          eventBus[id].resolved = true;
        }

    },0)



    }

  }

}
