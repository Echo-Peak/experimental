import Settings from './settings';
import {actions_header} from './actions';
import {AppMenu ,AppMenuButton,AppMenuContent } from '../app menu/appMenu';

let {RouteHandler , Link} = window.ReactRouter;

  var UID = require('../decorators/UID');
   export default class Header extends React.Component{
    constructor(props){
        super();

        let self = this;

        let transition =function(){
        }
        this.transition = transition.call(this);

        this.state = {
          viewTitle:'Home'
        }
    }
    componentDidMount(){
      actions_header.cache({id:'header',data:this},true);
    }

    render(){
      let viewTitle;
      actions_header.updateTitle(function(title){

        if(title == '/'){
          viewTitle = 'Home'
        }else{
        viewTitle = title
        }
      })
        return(
        <div className='_header' ref='elm'>
            <div className='_header-pannel'></div>
            <div className='_header-title'><h1>{viewTitle}</h1></div>
            <div className='_header-settings'><Settings></Settings></div>
            </div>
        )
    }
}
