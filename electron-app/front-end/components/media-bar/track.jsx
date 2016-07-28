

export default class Track extends React.Component{
    constructor(props){
      super();
      this.state = {
       min:0,
        max:100

      };
      //this.timeline = props.ref;
      this.isMouseDown = false;
      this.mousedownhandler = null;
      this.pos = 0;
      this.trackThumb = null;
      this.now= 0;
      Track.now = 0;
      Track.thumb = null;
      Track.track = null;
    }
    componentDidMount(){
        Track.thumb = this.refs.thumb;
        Track.track = this.refs.track;
    }
    componentWillMount(){

    }

    mousedown(){
      console.log('mousedown')
      let elm = this.refs.track;
      let thumb = this.trackThumb;
      elm.addEventListener('mousemove',this.mousemove)
      elm.style.background = '#ac1'
    }
    mouseup(){
      console.log('mouseup')
      let elm = this.refs.track;
      let thumb = this.trackThumb;
      elm.removeEventListener('mousemove',this.mousemove);
      elm.style.background = '#ac9'
    }
    mousemove(e){




          if(Track.now < e.clientX){
            console.log("so many times");
            Track.thumb.style.transform = `translateX(${ e.clientX -Track.track.offsetLeft}px)`
            //console.log('asending')
          }else{
            console.log("too many times");
            //Track.thumb.style.left = `${e.clientX}px`
            //console.log('decending')
          }
          if(e.clientX > (Track.track.offsetLeft + Track.track.offsetWidth)){
            Track.thumb.style.transform = `translateX(${Track.track.offsetLeft - Track.track.offsetWidth}px)`
            console.log('out of bounds')
            return false
          }

          Track.now = e.clientX;
    }
    moveto(){
      //let clampX =
    }

    render(){
      let time = this.props.time;
      let startTime = time[0];
      let trackLength = time[1];
//      <div className='track-track' onClick={this.moveto.bind(this)}></div>
      return (<div className='track' ref='track' onMouseDown={this.mousedown.bind(this)} onMouseUp={this.mouseup.bind(this)}>
      <div className='track-thumb' ref='thumb'></div>

    </div>

  )
    }
    }
