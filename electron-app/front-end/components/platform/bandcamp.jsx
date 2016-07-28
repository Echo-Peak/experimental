
export default class Bandcamp extends React.Component{
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
      return (    <div className='platform-bandcamp' title='Play music from your computer' onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
            <div className='platform-bandcamp-margins' ref='elm'>
              <div>
                <div className='platform-bandcamp-img'>

                  <img src='res/bandcamp.png'></img>
                </div>
                <div className='platform-bandcamp-heading'>
                  <p>{this.state.tip || 'somthing'}</p>
                </div>
              </div>
              <div>
                <div className='platform-bandcamp-hoverState'>
                  helo
                </div>
              </div>

            </div>

          </div>)
    }
    }
