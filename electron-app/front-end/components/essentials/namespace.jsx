import store from './store';
import {utils} from './utils';
import isolated from './isolated';
import pubsub from './pub-sub';

export default class App{
  constructor(){
    this.store = store();
      App._ = isolated();
      this.UNSAFE = App._


       this.on = PubSub.subscribe;
       this.emit = PubSub.publishSync;

       this.broadcast = PubSub.publish;
      this.util = utils;




  }

}
