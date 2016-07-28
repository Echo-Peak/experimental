//MARKED FOR DELETE
import PositionFixed from './positionFixed';
import Header from '../header/header';
import {elements} from '../ui/elements';
const {Button , Input} = elements;


export default class RNG  extends React.Component{
    constructor(props){
      super();
      this.calculate = this.calculate;
      this.state = {
        start:0,
        end:0,
        multi:0,
        result:0
      }
    }
    componentDidMount(){
    }

    inputStart(input){

      if(input.value > 100){
        this.state.start = 100;

      }else if(input.value < 0){
          this.state.start = 0;
      }else{

        this.state.start = parseInt(input.value);

      }
    }
    inputEnd(input){
      if(input.value > 100){
        this.state.end =100

      }else if(input.value < 0){
        this.state.end = 0

      }else{

        this.state.end = parseInt(input.value);
      }
    }
    inputMulti(input){
      if(input.value > 50){

this.state.multi =50;
      }else if(input.value < 0){

this.state.multi = 0;
      }else{

        this.state.multi = parseInt(input.value)
      }
    }
    calculate(input){
      let target = input.target;
      const state = this.state;
      switch (target.id) {
          case 'start':this.inputStart(input.target);
            break;
          case 'end':this.inputEnd(input.target);
              break;
          case 'multi':this.inputMulti(input.target);
        }
        //wtf is this?
        this.state.result = Math.pow(Math.floor(state.start * Math.random() * state.end),state.multi)
        this.setState();
      console.info(this.state)
    }
    render(){
      let inputStyle = {
        width:'150px',
        height:'50px',
        border:'2px solid orange'

      }

      return (
        <PositionFixed margin='100px'>
          <h1>Random Number Generator</h1>
          <div className='Generator--rng'>
            <div>
              <label>Start</label>
              <Input type='number' css={inputStyle} value={this.state.start} calculate={this.calculate.bind(this)} switch='start' minmax={[0,100]}/>
            </div>
            <div>
              <label>End:</label>
              <Input type='number' css={inputStyle} value={this.state.end}  calculate={this.calculate.bind(this)} switch='end' minmax={[0,100]}/>
            </div>
            <div>
              <label>Multiplyer</label>
              <Input type='number' css={inputStyle} value={this.state.multi} calculate={this.calculate.bind(this)} switch='multi'  minmax={[0,50]}/>
            </div>


      <h2>Result: {this.state.result}</h2>
          </div>

        </PositionFixed>
      )
    }
    }
