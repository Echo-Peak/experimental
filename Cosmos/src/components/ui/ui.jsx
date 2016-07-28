import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import {actions_ui} from './actions';
//import Bubbles from '../bubbles/bubbles';
//import BubblesItem from '../bubbles/items';
//import BubblesLayer from '../bubbles/layers';
import UID from '../decorators/uid';
let {Link,Route,Router} = window.ReactRouter;


export default class UI extends React.Component{
    constructor(){
        super();

        let transition =function(){

        }
        this.transition = transition.call(this);
    }
    componentDidMount(){
      actions_ui.cache({id:'ui',data:{component:this ,refs:[]}},true)
    }

    layers(){
      //subsitute index 0 for react component and that children is everthing but index 0
      let layer1 = [
        ['li','layer 1.0'] ,['li','layer 1.1']
      ];
      let layer2 = [
        ['li','layer 2'] ,['li','layer 2'] ,['li','layer 2.3']
      ];
      let layer3 = [
        ['li','layer 3'] ,['li','layer 3']
      ];
      let layer4 = [
        ['li','some data'] ,['li','some data here 2']
      ];
      let layer5 = [
        ['li','some data 5'] ,['li','some data here 5']
      ];
      let layer6 = [
        ['li','some data 6'] ,['li','some data here 6'],['li','some dfff 6.0']
      ];

      //expands dynamily
      //layers is then composed in bubbles.compose
      return {
        '1':layer1,
        '2':layer2,
        '3':layer3,
        '4':layer4,
        '5':layer5,
        '6':layer6
      }
    }
    render(){

        return (
          <div ref='UI'>

              <Sidebar ref='sidebar'></Sidebar>



            <div text='inside...everything outside will be position fixed or absolute and seperate from this div/block' className='view-shift'>
              <Header></Header>

              <div text='this is where all child components get rendered by router'>
                {this.props.children}
              </div>

            </div>

        </div>)
    }
}
