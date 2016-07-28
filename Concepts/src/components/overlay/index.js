import overlay from './overlay.directive';
import overlayController from './overlay.controller';
import overlayFactory from './overlay.factory';
Concepts.Modules.overlay = angular.module('overlay',[])
.factory('overlayFactory' ,overlayFactory)
.controller('overlayController' ,['overlayFactory' ,'$scope', 'RouterStates',overlayController])
.directive('overlay' ,['menuFactory' ,'DOMcache','$timeout',overlay])


;export default Concepts.Modules.overlay.name
