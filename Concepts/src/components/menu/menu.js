export default function Menu(){

window.io.Modules.Menu = angular.module('menu' ,['noScope'])
   .controller('menuController' ,menuController)
   .directive({
       appMenu:appMenu,
       menuHeader:menuHeader,
       menuList:menuList

   });

menuController.$inject = ['menuFactory' ,'$scope'];
function menuController( menuFactory , $scope){
    const menu = this;


//       menu.$on('pageReady' ,function(scope , data){
//
//       })

        //menu.view.displayTitles = res['titles'];

    //async for compiling menu buttons directive
    $scope.$applyAsync(function(){
        $scope.$broadcast('menu-list' ,menuFactory.getSelected('titles'))
    });

}
 appMenu.$inject = ['Bridge']
function appMenu(Bridge){


    var link = function(scope, elm ,attr , ctrl){
        let menuContainer = elm[0].querySelector('.menu-container');


        let element = {
            animation:new tweenmax(menuContainer , 0 , {x:0}),
            show:function(){
                try{
                    this.animation.play()
                }catch(e){
                    menuContainer.classList.add('open')
                }

            },
            hide:function(){
                try{
                    this.animation.reverse()
                }catch(e){
                    menuContainer.classList.remove('open')
                }
        }
        }


            //removed 'toggle-menu-event' in favour of Bridge


        let menuStatus =function(){
            return Bridge.menuStatus
        }

        let menuWork = function(value){
            value ? element.show() : element.hide()

        }


        scope.$watch(menuStatus , menuWork)
    }

    return{
        link:link,
        templateUrl:'menu2',
        restric:'EA',
        controller:'menuController as menu'
    }
}

function menuHeader(){
    return{
        restric:'E',
        templateUrl:'menuHeader',
        link:function(){

        }
    }
}
menuList.$inject = ['$compile'];
function menuList($compile){
    return function(scope ,elm){
        let $elms = ''
        let compile = (item ,index ,arr)=>{
            let mdButton = document.createElement('md-button')
            mdButton.setAttribute('ui-sref' , item[1])
            //mdButton.setAttribute('class' , 'fa fa-'+item[2])
            mdButton.setAttribute('ng-style' ,'global.$theme.accent')
            mdButton.innerText = item[0];
            $elms += mdButton.outerHTML

            if(index+1 === arr.length){
                render()
            }
        }

        function render(){
            let compiled = $compile($elms)(scope)
            elm.append(compiled)
        }

        scope.$on('menu-list' ,function(target ,data){
            data.forEach(compile)
        })
    }
}
}
