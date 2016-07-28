import {Private} from '../prototype';
import {displayStyles} from './stylesheets/display';
import {pannelStyles} from './stylesheets/pannel-styles';
import {settingsStyles} from './stylesheets/settings';
import {settingsHTML} from './html/settings';
import {stylesHTML} from './html/style-editor';
import {styleEditorStyles} from './stylesheets/style-editor';
import {pannelHTML} from './html/pannel';
import {displayHTML} from './html/display';
import setInitialStates from './state';


export default function(){

console.log()
  let _displayStyles = document.createElement('style');
  _displayStyles.setAttribute('info','main styles for the UI')
  let _pannelStyles = document.createElement('style');
  _pannelStyles.setAttribute('info','main styles for the pannel bar that controlls the ui');


  let settings = document.createElement('div');
  settings.innerHTML = settingsHTML;
  settings = settings.children[0];

  let styles = document.createElement('div');
  styles.innerHTML = stylesHTML;
  styles = styles.children[0]

  let pannel = document.createElement('div');
  pannel.setAttribute('id','Consoleless-pannel');
  pannel.innerHTML = pannelHTML;

  let display = document.createElement('div');
  display.innerHTML = displayHTML;


  pannel.children[0].appendChild(settings);
  pannel.children[0].appendChild(styles);
  let options = {
    state:setInitialStates(),
    dom:{
      pannel:{
        element:pannel.querySelector('#Consoleless-pannel'),
        movePannel:pannel.querySelector('#Consoleless-pannel-movePannel'),
        moveDisplay:pannel.querySelector('#Consoleless-pannel-moveDsiplay'),
        title:pannel.querySelector('#Consoleless-pannel-title'),
        settings:pannel.querySelector('#Consoleless-pannel-settings'),
        styleEditor:pannel.querySelector('#Consoleless-pannel-styleEditor')
      },
      settings:{
        toggle:settings.querySelector('#Consoleless-settings-toggle'),
        showTitle:settings.querySelector('#Consoleless-settings-showTitle'),
        animations:settings.querySelector('#Consoleless-settings-animations'),
        opacity:settings.querySelector('#Consoleless-settings-opacity'),
        bind:settings.querySelector('#Consoleless-settings-bind'),
        reset:settings.querySelector('#Consoleless-settings-reset'),
        element:settings
      },
      display:{
        element:display.querySelector('#Consoleless-display'),
        inject:display.querySelector('#Consoleless-display-inject'),
        title:display.querySelector('#Consoleless-display-title'),
        clear:display.querySelector('#Consoleless-display-clear')
      },
      styleEditor:{
        element:styles,
        types:{
          'number':styles.querySelector('#Consoleless-style-number'),
          'null':styles.querySelector('#Consoleless-style-null'),
          'function':styles.querySelector('#Consoleless-style-function'),
          'string':styles.querySelector('#Consoleless-style-string'),
          'false':styles.querySelector('#Consoleless-style-false'),
          'true':styles.querySelector('#Consoleless-style-true'),
          'nan':styles.querySelector('#Consoleless-style-nan'),
          'array':styles.querySelector('#Consoleless-style-array'),
          'object':styles.querySelector('#Consoleless-style-object'),
          'undefined':styles.querySelector('#Consoleless-style-undefined')
        },
          setDisplay:styles.querySelector('#Consoleless-style-setDisplay'),
          setPannel:styles.querySelector('#Consoleless-style-setPannel'),
          opacity:styles.querySelector('#Consoleless-style-opacity'),
          applyStyles:styles.querySelector('#Consoleless-style-apply'),
          display:styles.querySelector('#Consoleless-style-display'),
          pannel:styles.querySelector('#Consoleless-style-pannel'),
          displayBackground:styles.querySelector('#Consoleless-style-displayBackground'),
          consoleDelay:styles.querySelector('#Consoleless-style-consoleDelay'),

      }


    }
  }


  let injectStyles = (options)=>{
    _displayStyles.innerHTML = displayStyles;
    _pannelStyles.innerHTML = pannelStyles + settingsStyles + styleEditorStyles;

    document.head.appendChild(_pannelStyles);
    document.head.appendChild(_displayStyles);

  }

    injectStyles(options)
    Private.ready = options;
}
