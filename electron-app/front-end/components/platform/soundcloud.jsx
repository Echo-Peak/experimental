import PlatformMenu from './platform-menu';

export default class Soundcloud extends React.Component{
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
      return (    <div className='platform-soundcloud' title='Play music from your computer' onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
            <div className='platform-soundcloud-margins' ref='elm'>
              <div>
                <div className='platform-soundcloud-img'>

                  <img src='res/soundcloud.png'></img>
                </div>
                <div className='platform-soundcloud-heading'>
                  <p>{this.state.tip || 'somthing'}</p>
                </div>
              </div>
              <div>
                <div className='platform-soundcloud-hoverState'>
                  helo
                </div>
              </div>

            </div>

          </div>)
    }
    }
