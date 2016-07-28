import pannelSettings from './settings-button';
import pannelMove from './move-button';
import pannelMoveDsiplay from './moveDisplay-button';
import pannelStyle from './style-button';

export default function(DOM , getState){

let toggleSettings = false;
let settings = DOM.ready.dom.settings.element;
let pannelSettingsButton = DOM.ready.dom.pannel.settings;

if(!getState.animations){
  settings.style.transform = '';
  settings.style.display = 'none';
}else{
  settings.style.transition = 'all ' + (getState.animationSpeed || 0.5) +'s';
  settings.style.transform = 'translate(20%,50%) scale(0)';
}


  pannelSettings(DOM , getState);
  pannelMove(DOM , getState);
  pannelMoveDsiplay(DOM ,getState);
  pannelStyle(DOM , getState);
}
