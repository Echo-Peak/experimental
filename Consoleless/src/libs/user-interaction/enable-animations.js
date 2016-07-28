import {consoleless}  from '../prototype';

export default function(getStates){
  if(getStates.animations){
    consoleless.enableAnimations()
  }else{
    consoleless.disableAnimations()
  }
}
