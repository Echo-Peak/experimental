import App from './ui/ui';
import {actions_ui} from './ui/actions';
import Header from './header/header';
import Contact from './contact/contact';
import RNG from './views--generators/rng';
import Canvas from './views--generators/canvas';
import Ajax from './views--generators/ajax';
import Lorem from './views--generators/lorem';
import Lsystem from './views--generators/l-system';
import RNGcolor from './views--generators/rng-color';
import ImgManip from './views--generators/img-manip';
import BinaryText from './views--generators/binary-2-text';

let {browserHistory, Link , Router, IndexRoute ,Route} = window.ReactRouter

class APP extends React.Component{
    constructor(){
        super();
        this.moot = this.moot
    }

    viewTitle(path){
      actions_ui.setViewTitle(this.path)
      console.info('ran');

    }


    render(){

        return (
          <Router history={browserHistory}>
            <Route path='/' component={App} onEnter={this.viewTitle}>
                <Route path='ajax-manipulation' component={Ajax} onEnter={this.viewTitle}/>
                <Route path='l-system-generator' component={Lsystem} onEnter={this.viewTitle}/>
                <Route path='random-color-generator' component={RNGcolor} onEnter={this.viewTitle}/>
                <Route path='image-src-manipulation' component={ImgManip} onEnter={this.viewTitle}/>
                <Route path='binary-to-text' component={BinaryText} onEnter={this.viewTitle}/>
                <Route path='canvas-random-shapes' component={Canvas} onEnter={this.viewTitle}/>
                <Route path='random-generator' component={RNG} onEnter={this.viewTitle}/>
                <Route path='lorem-ipsum-generator' component={Lorem} onEnter={this.viewTitle}/>
            </Route>
            <Route path='/head' component={Header} onEnter={Header.prototype.transition}></Route>
            <Route path='/contact' component={Contact}></Route>

          </Router>)
    }

}

var mountElm = document.getElementById('app');

  ReactDOM.render(<APP/> , mountElm);
