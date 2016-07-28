import {states} from './states';
export default function applyControllers(){
  angular.forEach(states ,function(items ,index){
      Concepts.Modules.ROUTER.controller(items ,function(){
          let state = this;
          this.title =items
      });

  });
}
