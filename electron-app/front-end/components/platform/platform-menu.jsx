import LocalMenu from './local-menu';
import YoutubeMenu from './youtube-menu';
import SoundcloudMenu from './soundcloud-menu';
import BandcampMenu from './bandcamp-menu';

export default class PlatformMenu extends React.Component{
    constructor(props){
      super();
      this.state = {
        open:false,
        platform:null
      };
    }
    componentDidMount(){

    }
    componentWillMount(){

    }

    render(){

      let hide = this.props.status ? {display:'block'} : {display:'none'};
      let position = {
        left:this.props.mouse[0],
        top:this.props.mouse[1]
      };

      let styles = Object.assign({} ,hide ,position);

      let Alias;

      switch(this.props.platform){
        case 'local':Alias = LocalMenu; break;
        case 'youtube':Alias = YoutubeMenu; break;
        case 'soundcloud':Alias = SoundcloudMenu; break;
        case 'bandcamp':Alias = BandcampMenu; break;
        default:Alias = 'h6';
      }


      return (<div className='platform-menu' style={styles}>
        <Alias>{'No platform selected'}</Alias>
    </div>)
    }
    }
