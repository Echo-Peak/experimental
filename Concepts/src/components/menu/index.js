import menu from './menu.directive';
import menuController from './menu.controller';
import menuList from './menu-list.directive';
import menuFactory from './menu.factory';
import {links} from './title-links';

Concepts.Modules.menu = angular.module('menu',[])
.directive('appMenu',[menu])
.directive('menuList' ,['$compile',menuList])
.factory('menuFactory' ,menuFactory)
.constant('menu.titleLinks', function(){return links})
.controller('menuController' ,['$scope', 'menuFactory',menuController])

;export default Concepts.Modules.menu.name
