import {restrict} from '../../router/restrictStates';
export default function headerOptionsController(menuFactory ,scope ,$timeout){
      let options = this; //controller as
      options.title = 'Home'; //default title if {global.pageReady} fails

    scope.$on('global.pageReady' , function(target ,data){ //updated drom CORE controller (ui.router > $stateChangeSuccses)
          options.title = data.title;
        if(~restrict.indexOf(data.title.toLowerCase())){
            options.overlayShouldHide = true; //if {restric} matches a index of data.title then it will hide the button
            Concepts.stores.getStore('Proto').global.Broadcaster('overlay-should-open' ,false); //hides overlay if its open while swithing to a restricted page
        }else{
            options.overlayShouldHide = false; //otherwise it will show
        }
    });


    options.openOverlay = function(){ //opens overlay
      Concepts.stores.getStore('Proto').Overlay.open();

    }


}
