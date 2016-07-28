import {consoleless ,Private} from '../prototype';
import MutateLocalStorage from '../utils/mutate-ls';
import State from '../pre-load/state';
let opacity = false;
let enable = false;
function update(){

}

export default function(DOM){
let getState = State();
let settings = DOM.ready.dom.settings;


let settingsHandler = function(e){

  switch(e.target.id || e.target.name){
    case 'Consoleless-settings-showTitle':{

      if(e.target.checked){
        Private.ready.dom.pannel.title.style.display = 'block';
      }else{
        Private.ready.dom.pannel.title.style.display = 'none'
      }
      getState.pannel.showTitle = e.target.checked;
      MutateLocalStorage(getState)
    };
    break;
    case 'Consoleless-settings-toggle':{
      getState.enabled = e.target.checked;
      MutateLocalStorage(getState);
      if(e.target.checked){
        consoleless.enable();
      }else{
        consoleless.disable();
      }

    };
    break;
    case 'Consoleless-settings-animations':{

      getState.animations = e.target.checked;
      MutateLocalStorage(getState)
    };
break;
case 'Consoleless-settings-bind':{

  if(e.target.checked){
    consoleless.bindConsole();
  }else{
    consoleless.unbindConsole();
  }

};
break;
case 'Consoleless-settings-reset':{

  let comfirmReset = confirm('RESET Consoleless to default settings?')
if(comfirmReset){
  consoleless.reset(Private);
}
};





  }
}


DOM.ready.dom.settings.element.addEventListener('click',settingsHandler)


}
