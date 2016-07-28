import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';
export default function(){
  let newState = State();
  newState.bindConsole = true;
  MutateLocalStorage(newState);
  console.log = this.log;
  console.warn = this.warn;
  console.error = this.error;
  console.info = this.info;
}
