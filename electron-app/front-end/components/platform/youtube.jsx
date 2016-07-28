import PlatformMenu from './platform-menu';
export default class Youtube extends React.Component{
    constructor(props){
      super();
      this.state = {
        isOpen:false
      }
    }
    componentDidMount(){

    }
    componentWillMount(){

    }
    toggle() {
      this.state.isOpen = !this.state.isOpen;

      if (this.state.isOpen) {
        TweenMax.to(this.refs.elm, 0.3, {
          marginTop: -250,
          ease: Expo.easeOut
        })
      } else {
        TweenMax.to(this.refs.elm, 0.3, {
          marginTop: 0,
          ease: Expo.easeIn
        })
      }
    }
    render(){
      return  (<div className='platform-youtube' title='Play music from your computer' onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
            <div className='platform-youtube-margins' ref='elm'>
              <div>
                <div className='platform-youtube-img'>

                  <img src='res/youtube.png'></img>
                </div>
                <div className='platform-youtube-heading'>
                  <p>{this.state.tip || 'somthing'}</p>
                </div>
              </div>
              <div>
                <div className='platform-youtube-hoverState'>
                  helo
                </div>
              </div>

            </div>

          </div>)
    }
    }
