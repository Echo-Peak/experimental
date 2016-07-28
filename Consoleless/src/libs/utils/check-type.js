export default function(sometype){

  return{
    'object':function(){
      if(typeof sometype === 'object' &&  sometype !== null && Array.isArray(sometype) === false){
        return true;
      }
      return false;
    },
    'null':function(){
      if(sometype === null){
        return true;
      }
      return false;
    },
    'number':function(){
      if(typeof sometype === 'number' || isNaN(sometype)){
        return true;
      }
      return false;
    },
    'string':function(){
      if(typeof sometype === 'string' && sometype.length){
        return true;
      }
      return false;
    },
    'false':function(){
      if(sometype === false){
        return true;
      }
      return false;
    },
    'true':function(){
      if(sometype === true){
        return true;
      }
      return false;
    },
    'undefined':function(){
        if(sometype === undefined || sometype === 'undefined'){
          return true;
        }
        return false;
    },
    'array':function(){
      if(Array.isArray(sometype)){
        return true;
      }
      return false;
    },

    'function':function(){
      if(typeof sometype === 'function'){
        return true
      }
      return false
    }



  }
}
