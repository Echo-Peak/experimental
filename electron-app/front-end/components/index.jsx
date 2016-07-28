import {essentials} from './essentials';
essentials.mount('lila'); //codename
 import Platform from './platform';
 import TabBar from './tab-bar';
 import Homepage from './homepage';
 import MediaBar from './media-bar';

 let {hashHistory, Link , Router, IndexRoute ,Route} = window.ReactRouter



class UI extends React.Component{
    constructor(props){
      super();
      this.state = {};

    }
    componentDidMount(){
        lila.store.dom().add('UI' ,this);
        hashHistory.push('home');
        console.log(this.props);
    }
    componentWillMount(){

    }

    render(){
      return (<div className='UI' id='UI'>
      <div className='top-bar'>
          <TabBar></TabBar>
          <div></div>
      </div>

      <span>Version{Math.floor(Math.random()*100)}</span>


      <div>
        {this.props.children}
      </div>
      <MediaBar></MediaBar>
      </div>)
    }
    }



class App extends React.Component{
    constructor(props){
      super();
      this.state = {};
    }
    componentDidMount(){

    }
    componentWillMount(){

    }

    stuff(url){
      console.log(url);
      document.getElementById('DEBUG-URL').innerText = url.location.pathname;
    }
    animate(whatToAnimate){

      return function(){

      }
    }
    left(){
      console.log("left");
    }
    render(){
      return (
        <Router history={hashHistory}>
          <Route path='/' component={UI} onEnter={this.stuff}>
              <Route path='/home' component={Platform} onEnter={this.animate('homepage')} onLeave={this.left}></Route>


          </Route>

        </Router>
      )
    }
  }



ReactDOM.render(<App/> ,document.getElementById('app'))
