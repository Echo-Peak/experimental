export default function State(){ //sets up local storage states
//FOO
  let defaultState = {
    enabled:true,
    opacity:1,
    bindConsole:false,
    animations:true,
    delay:5000,
    animationSpeed:0.5,
    pannel:{
      pos:[800,0],

      width:600,
      height:40,
      showTitle:true,
      background:'rgb(53, 131, 56)',
    },
    display:{
      pos:[0,0],
      width:700,
      height:400,
      background:'rgb(224, 224, 224)',
    },
    types:{
      'number':'blue',
      'string':'green',
      'null':'#FF8100',
      'array':'red',
      'object':'purple',
      'false':'#FF5858',
      'true':'#1E82FF',
      'nan':'purple',
      'function':'purple',
      'emptyString':'rgb(213, 128, 255)',
      'undefined':'#FF8100'
    }

  }

  if(!localStorage['Consoleless'] || localStorage['Consoleless'] == null || localStorage['Consoleless'] == undefined){

    localStorage['Consoleless'] = JSON.stringify(defaultState);

    return defaultState
  }else{

    return JSON.parse(localStorage['Consoleless'])
  }


}
