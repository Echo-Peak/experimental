import local_cache from './local-cache';
Concepts.Modules.templateInjector = angular.module('templateInjector',[])
.service('local_cache',['$q','$http','$state',local_cache])
;export default Concepts.Modules.templateInjector.name
