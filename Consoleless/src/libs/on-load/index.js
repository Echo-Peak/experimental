import {consoleless ,Private} from '../prototype';

import State from '../pre-load/state';
import throttle from '../utils/throttle';

import {userInteraction} from '../user-interaction';
import addClearButton from './clear';

import setPositions from './set-positions';
import addPannel from '../pannel';
let getStates = State();

function tests(){
//  consoleless.log(2, null,false,true,RenTest,'hoo' ,[1,2,3] ,{one:38,capa:'i dont know',lol:function(){},sup:6736,mallowry:2})
  consoleless.log(42,'somethign happend!!!');
   consoleless.log(42,'somethign happend!!!');

  consoleless.log([1,2,3,'one',null]);
  consoleless.warn('holly molly');
   consoleless.error('holly molly' ,'9238723',348347, 9*8, 3e8);
  // setTimeout(()=>{
  //     consoleless.log(4434342,'somethign happend!!!');
  // },55000)
}

function injectHTML(DOM){

  document.body.appendChild(DOM.ready.dom.display.element);
  document.body.appendChild(DOM.ready.dom.pannel.element);
  consoleless.update(setPositions.bind(null,DOM,getStates))
}

export default window.onload = function(){
  window.Consoleless = consoleless

consoleless.saveDOMhere(Private)
injectHTML(Private);
//MOOT 2
addPannel(Private , getStates);
addClearButton(Private);
userInteraction.settings(Private);
userInteraction.resizeDisplay(Private ,getStates);
userInteraction.resizePannel(Private , getStates);
userInteraction.applyTypeColor(Private);
userInteraction.applyBackground(Private);
userInteraction.enableConsoleless(getStates);
userInteraction.enableAnimations(getStates);

//addStyleEditorListeners(Private);

tests();

}
