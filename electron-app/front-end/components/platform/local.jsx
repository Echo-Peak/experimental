//import PlatformMenu from './platform-menu';
let electron = require('electron');

export default class Local extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      tip:'something'
    };
    this.tipInterval = null;
    this.tipsArray = ['join us', 'walmart is death', 'green is acually red', 'i crached and landed', 'it almost happend again'];
    this.interval = null;
  }
  componentDidMount() {
    //console.error('has mounted' ,this.props.url)

    this.animateTips(true);
  //  this.refs['current-folder'].innerText = lila.ls.location

  }
  animateTips(shouldAnimate){
    let interval = false;
    let direction = ['top' ,'left','right','bottom'];
    let delay = 8000 + (this.props.delayOffset || 0);
    let tween = TweenMax;
    let aDelay =0.8;
    let statingProps = {opacity:1,transform:'translate(0%,0%)'}
    let element = this.refs.tip;
    let self = this;

    if(shouldAnimate){
      clearInterval(this.internal);

      this.internal = setInterval(()=>{
          let currentTip = this.tipsArray[Math.floor(Math.random()*this.tipsArray.length)];
          let Rdirection = direction[Math.floor(Math.random()*direction.length)];
          console.log('runiing')

            let whenDone = function(){
              console.warn('complete' , currentTip);
            tween.to(element,aDelay ,{x:'0%' , y:'0%',opacity:1, scale:1});
            self.setState({
              tip:currentTip
            });
          }

          switch(Rdirection){
            case 'left': tween.to(element,aDelay ,{x:'-100%' ,opacity:0, scale:0 ,onComplete:whenDone});break;
             case 'right' :tween.to(element,aDelay ,{x:'100%' ,opacity:0, scale:0 ,onComplete:whenDone}); break;
             case 'top':tween.to(element,aDelay ,{y:'-100%' ,opacity:0, scale:0 ,onComplete:whenDone}); break;
             case 'bottom' :tween.to(element,aDelay ,{y:'100%' ,opacity:0, scale:0 ,onComplete:whenDone}); break;

          }



        },delay);
      }else{
        element.style.cssText = ''
        clearInterval(this.internal);
      }


  }
  componentWillMount() {}

  toggle() {
    this.state.isOpen = !this.state.isOpen;

    if (this.state.isOpen) {
      TweenMax.to(this.refs.elm, 0.3, {
        marginTop: -250,
        ease: Expo.easeOut
      });
      this.animateTips(false);
    } else {
      TweenMax.to(this.refs.elm, 0.3, {
        marginTop: 0,
        ease: Expo.easeIn
      });
      this.animateTips(true);
    }
  }

openFolder(){
  electron.remote.dialog.showOpenDialog(
    {tile:'open folder',
      properties:['openDirectory']}
      ,function(dirname){
        //localStorage['app'] = dirname.toString()
         lila.store.ls.update('location', dirname);
         //go to local page
  });
}
  render() {


    return (
      <div className='platform-local' title='Play music from your computer' onMouseEnter={this.toggle.bind(this)} onMouseLeave={this.toggle.bind(this)}>
        <div className='platform-local-margins' ref='elm'>
          <div>
            <div className='platform-local-img'>

              <img src='res/local.png'></img>
            </div>
            <div className='platform-local-heading'>
              <p ref='tip'>{this.state.tip || 'somthing'}</p>
            </div>
          </div>

          <div>
            <div className='platform-local-hoverState'>
              <h4 ref='current-folder'>{lila.store.ls.ls.location || 'no folder'}</h4>
              <span>Open folder</span>
              <button onClick={this.openFolder}>Open</button>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
