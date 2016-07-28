import {Concepts} from './WINDOW/namespace';
import * as stringHelpers from './WINDOW/helpers';
import Util from './util';
import events from './events';
import router from './router';
import dataFactorys from './data';
import globalController from './CORE/controller';
import Menu from './menu';
import Header from './header';
import Themes from './themes';
import Footer from './footer';
import Overlay from './overlay';
import siteSettings from './site-settings';
import templateInjector from './template-injector';

Concepts.stores.create('Proto');
Concepts.stores.create('States');

 Concepts['modules-loaded'] = [
   //dependancys
   'ui.router','ngAnimate','ngMaterial',
   //templateCache
   'templates',
   //data / tools
    dataFactorys,Themes,events,Util,templateInjector,
   //components/modules
   router,Header,Footer,Menu,Overlay,siteSettings
];

 angular.module('app' , Concepts['modules-loaded'])

 .controller('GLOBAL',['$scope' , '$state' , '$themes' ,
 '$rootScope' ,'$timeout' , '$mdUtil'  ,
  'windowResizeEvent',globalController]);
