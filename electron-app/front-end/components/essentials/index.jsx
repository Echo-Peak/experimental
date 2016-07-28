import namespace from './namespace';
import prototypes from './prototypes';
import _localStorage from './local-storage'
import onload from './on-load';
import {audio} from '../audio';
export let essentials ={
  mount:function(windowNamespace){

    window[windowNamespace] = new namespace();

    this.firstRun(windowNamespace);
  },
  firstRun:function(windowNamespace){
    _localStorage();
    window.onload = onload.bind(namespace);
    window[windowNamespace].audio = audio;
    window[windowNamespace].audio.init();
  }

}
