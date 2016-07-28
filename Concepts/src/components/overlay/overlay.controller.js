import {states} from '../router/states';
export default function overlayController(overlayFactory ,$scope ,RouterStates ){
  Concepts.stores.Proto('Overlay' ,overlayController.prototype);
console.log('ran')
    let overlay = this;
    overlay.data = null;
    //gets available router states
    let _keys = Object.keys(RouterStates())

    function switchPageData(target ,state){
        let columns = [];
      if(states.indexOf(state.title) > -1){

          let data = overlayFactory.get(state.title);
          let keys = Object.keys(data)
          overlay.data  = data;

          keys.forEach(function(item ,index){
            //pushes the state of whether data[item] has data inside
              if(data[item].length > 0){
                  columns.push(true)
              }else{
                 columns.push(false)
              }
          });
          //sets the status for this directive {Array of booleans} used by pageOptions{directive} $watches
          //broadcasting to?
          overlay.columns = columns


    }else{
       overlay.data = null
    }

    }

      //waits for CORE controller to broadcast ui.router $stateChangeSuccess
      $scope.$on('global.pageReady' ,switchPageData)


    overlayController.prototype.open = function(){
      $scope.$broadcast('overlay-will-open')
    }

    overlayController.prototype.adjustMargins = function(bool){
      $scope.$broadcast('overlay-adjust-margins',bool)
    }

    overlayController.prototype.column_adjust = (columns)=>{

      // columns.forEach(function(column ,index){
      //     if(!column){
      //         column_elms[index].style.display ='none';
      //     }else{
      //         column_elms[index].style.display ='initial'
      //     }
      //
      //
      // });
    }


}
