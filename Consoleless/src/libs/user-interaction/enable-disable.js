import {consoleless} from '../prototype';
export default function(getState){
  if(getState.enabled){
    consoleless.enable(getState)
  }else{
    consoleless.disable(getState);
  }
}
