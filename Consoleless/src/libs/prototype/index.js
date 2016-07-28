import State from '../pre-load/state';
import MutateLocalStorage from '../utils/mutate-ls';
import update from './update';
import LOG from '../console/log';
import ERROR from '../console/error';
import INFO from '../console/info';
import WARN from '../console/warn';
import render from './render';
import enable from './enable';
import disable from './disable';
import bindConsole from './bind-console';
import unbindConsole from './unbind-console';
import reset from './reset';
import clear from './clear';
import enableAnimations from './enable-animations';
import disableAnimations from './disable-animations'
class Consoleless{
  constructor(){

    Consoleless.context = this;
    Consoleless.que =[];
    this.consoleDefaults ={
      log:console.log,
      info:console.info,
      warn:console.warn,
      error:console.error
    }
    this.update = update;
    this.allowAnimations = false;
    this.log = LOG;
    this.warn = WARN;
    this.error = ERROR;
    this.info = INFO;
    this.destroy = null;
    this.enable = enable;
    this.disable = disable;
    this.bindConsole = bindConsole;
    this.unbindConsole = unbindConsole;
    this.reset = reset;
    this.render = render;
    this.enableAnimations = enableAnimations;
    this.disableAnimations = disableAnimations;
    this.que = [];
    this.state = State();
    this.delay = this.state.delay;
    this.clear = clear
  }

saveDOMhere(DOM){
  this.DOM = DOM.ready.dom;
  }


}
let consoleless = new Consoleless();
let Private = Consoleless.Private = {}
export {consoleless ,Private }
