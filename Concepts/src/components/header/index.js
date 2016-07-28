import headerController from './MAIN.controller';
import headerOptionsController from './options/options.controller';
import Header from './header.directive';
import pageOptions from './options/page-options.directive';
import pageSearch from './pageSearch.directive';
import triggerMenuEvent from './trigger.directive';

Concepts.Modules.header = angular.module('header',[])
.controller('headerController' ,['$scope','menuFactory' ,'DOMcache', headerController])
.controller('headerOptionsController' ,['menuFactory','$scope' , '$timeout',headerOptionsController])
.directive('appHeader' ,Header)
.directive('headerPageSearch' ,pageSearch)
.directive('triggerMenuEvent' , ['$timeout',triggerMenuEvent])
.directive('headerPageOptions' ,['$templateCache',pageOptions])

;export default Concepts.Modules.header.name
