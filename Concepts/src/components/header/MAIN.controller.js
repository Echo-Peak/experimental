export default function headerController($scope, menuFactory, DOMcache){
     Concepts.stores.Proto('Header' ,headerController.prototype)
        let header = this;
    header.view ={}

        //assighns  header.getPageDocs to header > .page-options > ng-repeat
        //header.getPageDocs is populated from menufactory[ui.router > state > data > title]
        //replace(/[a-z]/,data.title.charAt(0).toUpperCase())

        $scope.$on('pageReady' ,function(target ,data){
            //manualy updates website site title
            header.view.currentPage = data.title;
            DOMcache().title.innerText = data.title;


        });


        let toggleFlag = false;
        header.broadcastMenuEvent =function(){
            toggleFlag = !toggleFlag;
            $scope.$emit('toggle-menu-event' ,toggleFlag)
        }


    header.openMenu = function(){
        $scope.$emit('open-menu-event')
    }

    //need to send down broadcast since not this button is not in headerOption scope
    header.hideOverlay = function(){
        $scope.$broadcast('header.overlay-toggle' , false)
    }


        //listens for icon click from headerOptions controller  to trigger dropdown
        $scope.$on('Header-ui-overlay-toggle' ,function(target ,data){
            $scope.$broadcast('header-ui-overlay-toggle' , data)
        });
    //just functions for ng-repeats for random lorem ipsom data
    header.randomStuff = {
        overlay:function(){

            let arr = Array.apply(null,Array(20)).map(function(item ,index){return item = index})

            return arr
        },
        gen:function(num){
            let arr = Array.apply(null,Array(num)).map(function(item ,index){return item = index})
            return arr
        }
    }
    $scope.$on('Header-flush-cache-event' ,function(){

        // $store.removal(function(data){
        //     $scope.$broadcast('header-flush-cache-event' , data)
        // });
    });

    $scope.$emit('global-load-footer');

  //NEW CODE--------------
  let t = false;
  header.toggle_siteSettings = function(){
    t = !t;
    Concepts.stores.getStore('Proto').SettingsDirective.toggle(t)
  }
}
