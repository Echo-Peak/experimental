import {$themes , allThemes ,THEME_KEYS} from  './themes';

Concepts.Modules.$themes = angular.module('$themes',[])
.service('$themes', ['$q',$themes])
.run(['$themes' ,()=>{}]) //initiate $themes
.constant('$allThemes' ,function(){return allThemes})
.constant('THEME_KEYS' ,function(){return THEME_KEYS});

export default Concepts.Modules.$themes.name
