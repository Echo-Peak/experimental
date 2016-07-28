import siteSettingsController from  './site-settings.controller';
import siteSettings from './site-settings.directive';
import themeList from './theme-list.directive';
import createTheme from './create-theme.directive';


Concepts.Modules.siteSettings = angular.module('siteSettings',[])
.controller('siteSettingsController',['$themes' ,'$scope' , '$timeout',siteSettingsController])
.directive('siteSettings',['$timeout',siteSettings])
.directive('themeList' , ['$compile','THEME_KEYS','$themes',themeList])
.directive('createTheme',createTheme)

;export default Concepts.Modules.siteSettings.name
