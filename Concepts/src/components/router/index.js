import {states} from './states';
import {views} from './views';
import baseURL from './baseURL';
import runBlock from './run-blocks';
import configBlock from './config-blocks';
//import injectHTML from './injectHTML';
import applyControllers from './apply-controllers';
Concepts.Modules.ROUTER = angular.module('routing-setup' ,[])
    .run(['$rootScope',runBlock])
    .config(['$urlRouterProvider', '$stateProvider',configBlock])
    .constant('RouterStates', function(){return states})
    //.directive('injectHtmlTemplate' ,injectHTML);

export default Concepts.Modules.ROUTER.name
applyControllers();
