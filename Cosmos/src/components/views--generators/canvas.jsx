import debounce from '../decorators/debounce';
import Header from '../header/header';

export default class Canvas  extends React.Component{
    constructor(props){
      super();
      this.state ={
        loaded:false,
        canvas:null,
        ctx:null
      }
      this.options = {
        shape:'sqaure',
        amount:1000,
        color:'white'
      }
    }
    componentDidMount(){
      cosmos.store.set('Canvas',{component:this ,refs:[], data:null});
      console.log('0');
      let  canvas = this.refs.canvas;
      canvas.width =window.innerWidth;
      canvas.height =window.innerHeight
      let ctx = canvas.getContext('2d');
      this.setState({
        loaded:true,
        canvas:canvas,
        ctx:ctx
      });

      window.addEventListener('resize' ,debounce(this.resizeCanvas,100 ,false).bind(this))
this.forceUpdate(function(){
  console.log('canvas',this.props);

  this.resizeCanvas();

});
    }
    resizeCanvas(){


      this.state.canvas.width =  1920 - 320;
      this.state.canvas.height =window.innerHeight

      this.setState({
        canvas:this.state.canvas
      });
//this.setup(this.draw);
    }

    draw(){
      console.log('hi')
    }
    setup(){
      let opt = this.options;
      opt['pixels'] = [];
      opt['shapes'] = ['circle','rectangle' ,'triangle' ,'square'];
      let deltaY = 0;
      let deltaX = 0;
      while(opt.amount--){
        console.log('g')
        deltaY += 1;
        deltaX += 1*0.2;
        // opt.pixels.push({
        //   x:100 + Math.round(Math.random()*window.innerWidth),
        //   y:100 + Math.round(Math.random()*window.innerHeight),
        //   shape:Math.floor(Math.random() * opt.shapes.length),
        //   deltaY:deltaY,
        //   deltaX:deltaX,
        //   velocity:Math.floor(Math.random() *100)
        // });
        this.state.ctx.fillStyle = 'white';
        this.state.ctx.fillRect(
          100 + Math.round(Math.random()*window.innerWidth),
          100 + Math.round(Math.random()*window.innerHeight) ,
          10 ,
          50
        );
      }
      console.log( opt.pixels)

      let bloop = function(){
        // opt.pixels.forEach(function(item){
        //   console.log(item)
        // });


      }

    }
    render(){

      return <canvas className='_canvas' ref='canvas' ></canvas>
    }
    }
