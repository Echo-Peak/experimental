 export default function siteSettingsController ($themes ,$scope , $timeout){
   Concepts.stores.Proto('Settings' ,siteSettingsController.prototype)
     let settings = this;

//NEW CODE  ----------------------
let themeBool = JSON.parse(localStorage.$themeIsEnabled);
    settings.themeToggler =()=>{
      themeBool = !themeBool;


      localStorage.setItem('$themeIsEnabled' ,themeBool);

      //console.log('%c'+themeBool,'color:green; font-size:25px');
      updateThemeModel();
    }

    settings.cacheStatus =JSON.parse(localStorage.cache);
    settings.cache =settings.cacheStatus;

    settings.setCache = ()=>{
      settings.cacheStatus = !settings.cacheStatus;
      localStorage.cache = settings.cacheStatus;
      $timeout(()=>{

      settings.cache =settings.cacheStatus;
      })
    }
    settings.flushCache = ()=>{
      Concepts.stores.getStore('Proto').localCache.clear();
    }

  settings.themeModel =false;
  function updateThemeModel(){

      let themeBool = localStorage.$themeIsEnabled;
      if(themeBool == 'false'){
        Concepts.stores.getStore('Proto').$themes.set('default');
        settings.currentTheme = 'disabled';
      }else{
        //console.log('%c'+themeBool,'color:red; font-size:25px');
      $timeout(function(){
        settings.themeModel = JSON.parse(themeBool);
        settings.themeStatus = settings.themeModel.toString().toTitleCase();
        settings.currentTheme = localStorage.$theme;
        localStorage.$theme = settings.currentTheme;
        Concepts.stores.getStore('Proto').$themes.set(settings.currentTheme);
      });
      }
  }
  //when clicked on a theme in menu
  settings.applyTheme = (themeName)=>{
    if(JSON.parse(localStorage.$themeIsEnabled)){
      Concepts.stores.getStore('Proto').$themes.set(themeName);
      localStorage.$theme = themeName;
      settings.currentTheme = themeName;

    }

  }
  //init
  updateThemeModel();


settings.toggleCustomThemes  = ()=>{
  Concepts.stores.getStore('Proto').createThemeDirective.open()
}
settings.exit = ()=>{
  Concepts.stores.getStore('Proto').createThemeDirective.close()
}
siteSettingsController.prototype.recompileThemeList = function(updatedThemeKeys){
  $scope.$broadcast('recompile-themes' ,updatedThemeKeys )
}

siteSettingsController.prototype.updateCurrentTheme = function(current){
  settings.currentTheme = current
}

}
