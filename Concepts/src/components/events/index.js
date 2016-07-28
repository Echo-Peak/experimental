import resize from './resize';
import scroll from './scroll';

Concepts.Modules.events = angular.module('events',[])
.service('windowResizeEvent',['$mdUtil',resize])
.service('scrollChangeEvent',['$mdUtil', '$timeout',scroll])
.run(['windowResizeEvent' ,'scrollChangeEvent' ,angular.noop]) //just to instantiate services

;export default Concepts.Modules.events.name
