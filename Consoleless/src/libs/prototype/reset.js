import State from '../pre-load/state';
export default function(){

  delete localStorage['Consoleless'];

  let getDefaltStates = State();
  this.update(()=>{

  this.DOM.display.element.style.top = getDefaltStates.display.pos[0] +'px';
  this.DOM.display.element.style.left = getDefaltStates.display.pos[1] +'px';
  this.DOM.display.element.style.width = getDefaltStates.display.width +'px';
  this.DOM.display.element.style.height = getDefaltStates.display.height +'px';
  this.DOM.display.element.style.background = getDefaltStates.display.background;


  this.DOM.pannel.element.style.top = getDefaltStates.pannel.pos[0] +'px';
  this.DOM.pannel.element.style.left = getDefaltStates.pannel.pos[1] +'px';
  this.DOM.pannel.element.style.width = getDefaltStates.pannel.width +'px';
  this.DOM.pannel.element.style.height = getDefaltStates.pannel.height +'px';


  this.DOM.pannel.element.style.background = getDefaltStates.pannel.background;
  });
}
