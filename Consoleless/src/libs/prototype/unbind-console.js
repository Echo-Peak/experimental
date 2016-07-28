import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';

export default function(){

  let newState = State();
  newState.bindConsole = false;
  MutateLocalStorage(newState);
  console.log = this.consoleDefaults.log;
  console.warn = this.consoleDefaults.warn;
  console.error = this.consoleDefaults.error;
  console.info = this.consoleDefaults.info;
}
