import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';

export default function(){
  let newState = State();
  this.DOM.display.element.classList.remove('Consoleless-disabled');
  this.DOM.pannel.element.classList.remove('Consoleless-disabled');

  if(newState.bindConsole){
  console.log = this.log;
  console.warn = this.warn;
  console.info = this.info;
  console.error = this.error;
  }

  newState.enabled = true;
  MutateLocalStorage(newState)
}
