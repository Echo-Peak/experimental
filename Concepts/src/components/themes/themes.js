import FIRST_RUN from './init';
import themeGenerator from './generate';
import {allThemes} from './all-themes';
let PRIVATE_KEYS = Object.keys(allThemes);
FIRST_RUN();
let THEME_KEYS = Object.keys(allThemes);

class $themes{
  constructor($q){
    Concepts.stores.Proto('$themes',this);

    this._themes = allThemes;
    this.check = this.check;
    this.update = this.update;
    this.set = this.set;
    this.get = this.get;
    this.toggle = this.toggle;
    this.enable = this.enable;
    this.disable = this.disable;
    this.ls = '[]';
    this.current = {};
    this._toggle = JSON.parse(localStorage['$themeIsEnabled']);
    this.first_run = ()=>{
      this.set(localStorage['$theme']);
    }
    this.first_run();

  }
  /*
  sets a theme whether a existeing theme or a custom theme
  @param1{themeName}'string'
  @param2{color}'string' - optional
  @param3{background}'string' - optional
  @param4{accent}'string' - optional

  */
  set(themeName ,color ,background , accent){
    let keys = Object.keys(this._themes);
    localStorage.$theme = themeName;
    if(keys.indexOf(themeName) <= -1){ //checks to see if themeName does not exist before creating a theme
      this._themes[themeName] = themeGenerator(color , background , accent);

    }
    this.current = {theme:themeName ,props:this._themes[themeName]} //sets the object structure

    this.update(this.current); //updates!!!
  }

  get(){
      return this.current; //returns the current theme{object}
  }

  update(props){ //hooks in with site-settings controller settings.themeStatus...calls this method

    setTimeout(()=>{
      //runs after Concepts.stores.getStore('Proto').global is created
      Concepts.stores.getStore('Proto').global.updateTheme(this.current); //sends this.current{object} to global controller to be applied
    })



  }
  toggle(){
    this._toggle  = !this._toggle;
    update(null ,this._toggle)
  }
  createTheme(theme){
    let prefix = 'USER_THEME';
    let ls = localStorage[prefix];
    let append = JSON.parse(ls);
    append.push(theme);
    localStorage[prefix] = JSON.stringify(append);
    this.set(theme.title ,theme.text , theme.background , theme.accent);
    THEME_KEYS.push(theme.title);
    Concepts.stores.getStore('Proto').Settings.recompileThemeList(THEME_KEYS)
  }
  clear(){
    let ls = localStorage['USER_THEME'];

    let _delete = false;
    THEME_KEYS.forEach((theme, index ,array)=>{
      if(PRIVATE_KEYS.indexOf(this.current.theme) <= -1){
        _delete = true;

      }
      if(index + 1 === array.length && _delete){
        delete localStorage['USER_THEME'];
        this.set('default');
        Concepts.stores.getStore('Proto').Settings.recompileThemeList(PRIVATE_KEYS);
        Concepts.stores.getStore('Proto').Settings.updateCurrentTheme('default')
      }
    })

  }

}

export {$themes , allThemes , THEME_KEYS}
