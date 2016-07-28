import {elements} from '../ui/elements';
const {Button } = elements
export default class RNGcolor extends React.Component{
    constructor(props){
      super();
      this.state = {
        result:'#fff',
        type:'RGB',
        background:null,
        position:0
      }
this.arc = 0.01;
this.angle =0;
    }
    mouseController(e){
        console.log(e[0].clientX)
      if(e[0].clientX >= this.colorWheel.wheel.x){
        this.arc += 10;
        var centerX = (this.colorWheel.wheel.width /2) + ( Math.cos(this.angle) * this.colorWheel.wheel.height);
        var centerY = (this.colorWheel.wheel.height /2) + (Math.sin(this.angle) * this.colorWheel.wheel.width);
        var sinX = e[0].clientX - (this.colorWheel.wheel.width*this.arc) ;

        this.colorWheel.wheel.elm.style.transform = `translate(${centerX}px, ${centerY}px)`;

        console.log(this.colorWheel.wheel.elm.style.transform);
        this.angle += this.arc
      }

    }
    init(){
      cosmos.store.set('RNGcolor',{component:this ,refs:[], data:null});
        this.colorWheel = {
        wheel:{
          elm:this.refs.wheel,
          x:this.refs.wheel.offsetLeft,
          y:this.refs.wheel.offsetTop,
          width:this.refs.wheel.offsetWidth,
          height:this.refs.wheel.offsetHeight,
        },
        thumb:{
          elm:this.refs.thumb,
          x:this.refs.thumb.offsetLeft,
          y:this.refs.thumb.offsetTop,
          width:this.refs.thumb.offsetWidth,
          height:this.refs.thumb.offsetHeight,

        }
      }
      document.addEventListener('mousemove', cosmos.throttle(this.mouseController.bind(this), 100))
      console.log(this.colorWheel.wheel)
    }
    componentDidMount(){
      //this.init();
      this.setType(this.state.type)

    }
    setType(option){
      try{
        this.state.type = option.target.value
      }catch(err){
        this.state.type = option
      }
      console.log('-->',this.state.type)
      switch(this.state.type){
        case 'RGB' : this.rgb();
          break;
        case 'HEX' : this.hex();
          break;
        case 'hsl'.toUpperCase() : this.hsl();
          break;
      }
    }
    updateResult(){

      this.setType(this.state.type)
    }
    rgb(){
      let rgb;
      let startingValue = 0;
      let red = Math.round(Math.random()*255)
      let green = Math.round(Math.random()*255)
      let blue = Math.round(Math.random()*255)
      console.log(red ,green)
        this.setState({
        result:`rgb(${red} , ${green} , ${blue})`
      });

    }
    hex(){
      const hex = '1234567890ABCDEF'.split('');
      let result ='#';

      let generateHex = function(){
        for(let i = 0; i<6; i++){
          result += hex[Math.floor(Math.random()*16)];
        }
        return result
      }

      this.setState({
        result:generateHex()
      })
    }
    hsl(){
      let hue = Math.floor(Math.random()*1000);
      let saturation = Math.round(Math.random()*100);
      let lightness = Math.round(50 + Math.random()*10);

      let hsl = `hsl(${hue} , ${saturation}% , ${lightness}%)`
      this.setState({
        result:hsl
      })
    }

    render(){
      return (<div className='_rng-color' style={{background:this.state.result}}>
        <Button onClick={this.updateResult.bind(this)}>GENERATE!!!!</Button>
        <label>type</label>
        <select onChange={this.setType.bind(this)}>
          <option value='RGB'>RGB</option>
          <option value='HEX' >HEX</option>
          <option value='HSL'>HSL</option>
        </select>
        <h1>{this.state.result}</h1>


      </div>)
    }
    }
