import State from '../pre-load/state';
import checkType from './check-type';

export default function(arg ,newSpan){
let getState = State();

  if(typeof arg === 'number'){
    newSpan.setAttribute('class','Consoleless-display-number');

    if(isNaN(arg)){
      newSpan.setAttribute('style','color:'+getState.types['nan']);
      newSpan.innerHTML = 'NaN'
      return newSpan.outerHTML;
    }else{
      newSpan.setAttribute('style','color:'+getState.types['number']);
      newSpan.innerHTML = arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return newSpan.outerHTML;
    }

  }
  if(Array.isArray(arg)){
    let buildArray ='';
    arg.forEach((item)=>{
      let arraySpan = document.createElement('span');
      if(typeof item === 'number' || isNaN(item)){
        arraySpan.setAttribute('style','color:'+getState.types['number']);
        arraySpan.setAttribute('class','Consoleless-display-number');
        arraySpan.innerHTML = item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      if(item === null){
        arraySpan.setAttribute('style','color:'+getState.types['null']);
        arraySpan.setAttribute('class','Consoleless-display-null');
        arraySpan.innerHTML = 'Null';
      }
      if(item === undefined){
        arraySpan.setAttribute('style','color:'+getState.types['undefined']);
        arraySpan.setAttribute('class','Consoleless-display-undefined');
        arraySpan.innerHTML = 'Undefined';
      }
      if(typeof item === 'function'){
        arraySpan.setAttribute('style','color:'+getState.types['function']);
        arraySpan.setAttribute('class','Consoleless-display-function');
        arraySpan.innerHTML = '[ Function ]';
      }

      if(typeof item === 'object' && item !== null){
        arraySpan.setAttribute('style','color:'+getState.types['object']);
        arraySpan.setAttribute('class','Consoleless-display-object');
        arraySpan.innerHTML = JSON.stringify(item,null,2);
      }
      if(typeof item === 'string'){
        arraySpan.setAttribute('style','color:'+getState.types['string']);
        arraySpan.setAttribute('class','Consoleless-display-string');
        arraySpan.innerHTML = item;
      }
      if(item === false){
        arraySpan.setAttribute('style','color:'+getState.types['false']);
        arraySpan.setAttribute('class','Consoleless-display-false');
        arraySpan.innerHTML = 'False';
      }
      if(item === true){
        arraySpan.setAttribute('style','color:'+getState.types['true']);
        arraySpan.setAttribute('class','Consoleless-display-true');
        arraySpan.innerHTML = 'True';
      }


      buildArray += arraySpan.outerHTML + ',';
    });
    let built  = '[' + buildArray.replace(/,$/,'') + ']';
    return built
  }
  if(typeof arg === 'string'){
    newSpan.setAttribute('class','Consoleless-display-string');
    newSpan.setAttribute('style','color:'+getState.types['string'])
    if(arg.length){
      newSpan.innerHTML = arg
    }else{
      newSpan.innerHTM ='[Empty-String]';
    }
    return newSpan.outerHTML;
  }
  if(typeof arg === 'object' &&  arg !== null && Array.isArray(arg) === false){
      let build = '';
      let finaleObj = {};
      newSpan.setAttribute('class','Consoleless-display-object');
      newSpan.setAttribute('style','color:'+getState.types['object']);
      let toKeys = Object.keys(arg);
      toKeys.forEach((key ,index ,array)=>{
        let objectSpan = document.createElement('span');

        if(typeof arg[key] == 'function'){
            objectSpan.setAttribute('style','color:'+getState.types['function']);
            objectSpan.setAttribute('class','Consoleless-display-function');
            objectSpan.innerHTML = key +':'+'[ Function ]' + ',';
        }
        if(typeof arg[key] == 'number' || isNaN(arg[key])){
            objectSpan.setAttribute('style','color:'+getState.types['number']);
            objectSpan.setAttribute('class','Consoleless-display-number');
            objectSpan.innerHTML = key +':'+arg[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ',';
        }
        if(typeof arg[key] == 'string'){
            objectSpan.setAttribute('style','color:'+getState.types['string']);
            objectSpan.setAttribute('class','Consoleless-display-string');
            objectSpan.innerHTML = key +':'+arg[key] + ',';
        }
        if(arg[key] === false){
            objectSpan.setAttribute('style','color:'+getState.types['false']);
            objectSpan.setAttribute('class','Consoleless-display-false');
            objectSpan.innerHTML = key +':False' + ',';
        }
        if(arg[key] === true){
            objectSpan.setAttribute('style','color:'+getState.types['true']);
            objectSpan.setAttribute('class','Consoleless-display-true');
            objectSpan.innerHTML = key +':True' + ',';
        }
        if(arg[key] === undefined || arg[key] === 'undefined'){
            objectSpan.setAttribute('style','color:'+getState.types['undefined']);
            objectSpan.setAttribute('class','Consoleless-display-undefined');
            objectSpan.innerHTML = key +':'+arg[key] + ',';
        }
        if(arg[key] === null){
            objectSpan.setAttribute('style','color:'+getState.types['null']);
            objectSpan.setAttribute('class','Consoleless-display-null');
            objectSpan.innerHTML = key +':Null' + ',';
        }

        build += objectSpan.outerHTML;
      });
      let deletetrailingComa = build.lastIndexOf(',');
      let built = '{'+build.substr(0,deletetrailingComa)+'</span>' +'}';
      console.log(built ,build)
    return built




  }
  if( arg === null){
    newSpan.setAttribute('class','Consoleless-display-null');
    newSpan.setAttribute('style','color:'+getState.types['null'])
    newSpan.innerHTML = 'Null'
    return newSpan.outerHTML;
  }
  if( arg === false){
    newSpan.setAttribute('class','Consoleless-display-false');
    newSpan.setAttribute('style','color:'+getState.types['false'])
    newSpan.innerHTML = 'False'
    return newSpan.outerHTML;
  }
  if( arg === true){
    newSpan.setAttribute('class','Consoleless-display-true');
    newSpan.setAttribute('style','color:'+getState.types['true'])
    newSpan.innerHTML = 'False'
    return newSpan.outerHTML;
  }
  if( typeof arg === 'function'){
    newSpan.setAttribute('class','Consoleless-display-function');
    newSpan.setAttribute('style','color:'+getState.types['function'])
    let fnName = arg.toString().match(/^\bfunction ([a-z0-9]+)/i);

    if(fnName === null){
      fnName = '[ Anonymous ] ';
      newSpan.innerHTML = fnName + 'Function'
      return newSpan.outerHTML;
    }else{
      fnName = '[ '+fnName[1] +' ] ';
      newSpan.innerHTML = fnName + 'Function';
      return newSpan.outerHTML;
    }





}


    if(arg === undefined){
      newSpan.setAttribute('class','Consoleless-display-undefined');
      newSpan.setAttribute('style','color:'+getState.types['undefined'])
      newSpan.innerHTML = 'Undefined';
      return newSpan.outerHTML;
    }

}
