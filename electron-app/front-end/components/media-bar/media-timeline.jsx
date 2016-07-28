//import Track from './track';

export default class MediaTimeline extends React.Component{
    constructor(props){
      super();
      this.state = {
        pos:0,
        currentTime:null,
        trackLength:100,
        totlalTime:null,
      };



    }

    componentDidMount(){
      lila.on('playback-time' ,(m,data)=>{
        console.log(data);
        let toMins = Math.floor(data.elapsed / 60);
        let secs = data.elapsed - toMins * 60;

        this.setState({
          currentTime:toMins + ':' + secs,
          pos:data.currentTime,

        });
      });
      lila.on('playback-length' ,(m,data)=>{
        let displayTrackLength = data.time[0] + ':' + data.time[1];
        let trackLength = data.trackLength;

        this.setState({
          totlalTime:displayTrackLength,
          trackLength:trackLength
        });
      });
    }
    componentWillMount(){

    }
    seek(e){
      this.setState({
        pos:Number(e.target.value)
      });
      lila.emit('playback-seek',Number(e.target.value))


    }
    render(){
      return (<div className='media-inner-timeline' ref='timeline'>

          <div className="current-time"><span ref='current-time'>{this.state.currentTime}</span></div>

          <div className='track'>
            <input type='range' id='track-slider' min='0' max={this.state.trackLength} onChange={this.seek.bind(this)} value={this.state.pos}></input>
          </div>

          <div className="track-length"><span ref='track-length'>{this.state.totlalTime}</span></div>


      </div>)
    }
    }
