import generate from './generate';
import {allThemes} from './all-themes';
export default function FIRST_RUN(){
  let theme = localStorage['$theme'];
  let themesEnabled = localStorage['$themeIsEnabled'];
  let userTheme = localStorage['USER_THEME'];

  if(theme =='null' || theme == undefined ||theme == '0'){
    localStorage['$theme'] = 'default';
  }
  if(themesEnabled =='null' || themesEnabled == undefined || themesEnabled == '0'){
      localStorage['$themeIsEnabled']  ='true';
  }

  if(userTheme =='null' || userTheme == undefined || userTheme == '0'){
    localStorage['USER_THEME']= '[]';
  }
  let USER_THEMES = JSON.parse(localStorage['USER_THEME']);
  let privateThemeKeys = Object.keys(allThemes);
  USER_THEMES.forEach((theme)=>{
    if(~privateThemeKeys.indexOf(theme.title)){
      console.error('can not overwrite theme');
      return;
    }
    allThemes[theme.title] = generate(theme.text , theme.background , theme.accent)

  })
  return
}
