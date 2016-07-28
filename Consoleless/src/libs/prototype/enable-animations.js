import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';

export default function(){
  let newState = State();
  newState.animations = true;
  MutateLocalStorage(newState);
  this.allowAnimations = true;
}
