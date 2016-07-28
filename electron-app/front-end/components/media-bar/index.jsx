import MediaBarControls from './media-bar-controls';
import MediaTimeline from './media-timeline';
import MediaAvatar from './media-avatar';

export default class MediaBar extends React.Component{
    constructor(props){
      super();
      this.state = {};
    }
    componentDidMount(){

    }
    componentWillMount(){

    }

    render(){
      return (<div className='media-bar'>
        <div className='inner-bar'>
          <MediaBarControls></MediaBarControls>
          <MediaTimeline></MediaTimeline>
          <MediaAvatar></MediaAvatar>
        </div>
      </div>)
    }
    }
