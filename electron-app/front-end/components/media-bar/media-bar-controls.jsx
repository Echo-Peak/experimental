export default class MediaBarControls extends React.Component{
    constructor(props){
      super();
      this.state = {
        play:false,
        volume:0.25,
        repeat:false,
        audio:null
      };

      let audioSrc;
      let self = this;


    }
    componentDidMount(){



    }
    componentWillMount(){

    }
    playItem(){

      this.setState({play:!this.state.play});

      if(this.state.play){
        lila.emit('playback-pause',false)
      }else{
        lila.emit('playback-pause',true)
      }
    }

    changeVolume(elm){
      console.log(elm.target.value ,this.state.audio );
      this.setState({
        volume:Number(elm.target.value)
      });
      if(this.state.audio != null){
        this.state.audio.volume = Number(elm.target.value);
      }

    }
    render(){

      let playIcon = this.state.play ? 'play' : 'pause';
      let volume = this.state.volume;

      return (<div className='media-inner-controls'>
        <div title="previous item" className="back fa fa-step-backward fa-2x"></div>
        <div title="play" className={`play fa fa-${playIcon} fa-2x`} onClick={this.playItem.bind(this)}></div>
        <div title="next item" className="next fa fa-step-forward fa-2x"></div>
        <div title="repeat" className="repeat fa fa-repeat fa-2x"></div>

        <div title="change volume" className="volume fa fa-volume-up fa-2x">
          <input type='range' id='volume-slider' onChange={this.changeVolume.bind(this)} min='0' max='1' step='.10' value={volume}></input>
        </div>
      </div>)
    }
    }
