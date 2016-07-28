import {clean} from './lorem-ipsum-sample';
import {elements} from '../ui/elements';
const {Input ,Button} = elements
export default class LoremIpsum extends React.Component{
    constructor(props){
      super();
      this.state = {
        base:1,
        step:1,
         multi:1,
         output:'click to generate some text'
      }
    }
    componentDidMount(){
      cosmos.store.set('LoremIpsum',{component:this ,refs:[], data:null});
    }
    base(input){
      if(input.vale < 1){
        this.state.base =1;
      }else if(input.value > 500){
        this.state.base = 500
      }else{
        this.state.base = parseInt(input.value)

      }
    }
    step(input){
      if(input.vale < 1){
        this.state.step =1;
      }else if(input.value > 10){
        this.state.step = 10
      }else{
        this.state.step = parseInt(input.value)

      }

    }
    multi(input){
      if(input.vale < 1){
        this.state.multi =1;
      }else if(input.value > 10){
        this.state.multi = 10
      }else{
        this.state.multi = parseInt(input.value)

      }
    }

    generate(inputs){
      let target = inputs.target;
      switch (target.id) {
        case 'base':this.base(target)
          break;
        case 'step':this.step(target)
          break;
        case 'multi':this.multi(target)
      }
      this.forceUpdate();
      console.info(this.state ,inputs.target.value)

    }
    output(){

      let chunk = [];
      let amount;
      let self =this;
      let wait = false;
      let timeout;

      for(let i = 0; i<this.state.step; i++){
        console.log('hi' , i , this.state.base)

      //  chunk.push(clean[Math.floor(Math.random()*clean.length)])
        // chunk.push(
        //   clean.splice(i,this.state.step).toString()
        // );

        for(var a =0; a<this.state.base; a++){

          chunk.push(clean.slice(a,this.state.base).toString());

        }



      }
      for(var multi = 0; multi<this.state.multi; multi++){
        var c = chunk.slice(0)
        chunk[chunk.length-1] = chunk.toString()

      }

      let final = chunk.toString().replace(/,/gm, ' ');
      this.setState({
        output:final
      })
    }


    render(){
      return (
        <div>
          <label>Base:</label>
        <Input type ='number' minmax={[1,500]} value={this.state.base} switch='base' calculate={this.generate.bind(this)}></Input>
        <label>amount per base:</label>
        <Input type ='number' minmax={[1,10]} value={this.state.step} switch='step' calculate={this.generate.bind(this)}></Input>
        <label>Multipleyer on base:</label>
        <Input type ='number' minmax={[1,10]} value={this.state.multi} switch='multi' calculate={this.generate.bind(this)}></Input>
        <Button clicked={this.output.bind(this)}>GENERATE</Button>
        <p>{this.state.output}</p>
        </div>

      )
    }
    }
