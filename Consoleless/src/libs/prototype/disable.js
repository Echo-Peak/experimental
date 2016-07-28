import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';

export default function(){
  let newState = State();
  if(newState.bindConsole){
    console.log = this.defaultLog;
    console.warn = this.defaultWarn;
    console.info = this.defaultInfo;
    console.error = this.defaultError;
  }
newState.enabled = false;
MutateLocalStorage(newState);
  this.DOM.display.element.classList.add('Consoleless-disabled');
  this.DOM.pannel.element.classList.add('Consoleless-disabled');
console.warn('Consoleless is disabled: Use Consoleless.enable() to enable Consoleless');
this.clear();
}
