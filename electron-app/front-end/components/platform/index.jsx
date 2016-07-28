import Local from './local';
import Youtube from './youtube';
import Soundcloud from './soundcloud';
import Bandcamp from './bandcamp';


export default class Platform extends React.Component{
    constructor(props){
      super();
      this.state = {};

    }
    componentDidMount(){

    }
    componentWillMount(){

    }

    render(){
      return (
        <div className='platform'>
            <div className='platform-margin-auto'>
              <Local url={this.props.route.path} delayOffset={0}></Local>
              <Youtube url={this.props.route.path} delayOffset={5}></Youtube>
              <Soundcloud url={this.props.route.path} delayOffset={10}></Soundcloud>
              <Bandcamp url={this.props.route.path} delayOffset={15}></Bandcamp>
            </div>
        </div>
      )
    }
    }
