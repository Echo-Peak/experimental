import UID from '../decorators/uid';
import BubblesLayer from './layers';
import BubblesItem from './items';
import {actions_bubbles} from './actions';
console.log(BubblesItem)
export default class Bubbles  extends React.Component{
    constructor(props){
      super();

      this.state = {
        complete:null
      }
      this.safe = {};
      this.translateX = 0;
      this.newSafe =null;
      this.layers = [];
      this.transform ={
        base:0,
        delta:0,
        deltaX:0,
        deltaY:0,
        rotate:0,
        rotateDelta:0
      }
    }

    //i need to compose layer items back in react elements
    check(layer){
      let correctKeys = [];
      let keys = Object.keys(layer);
      let safeLayers ={};
      let pass = 0;

      //prevents absurd abounts of layers by remapping layer keys
      var safeKeys = keys.map((item ,index)=>{
          let parsed = parseInt(item)
          if(!parsed){
            this.error('invaild Bubble layer key');

          }else if(keys.length > 10){
            this.error('too many layers...shorten to at most 10 layers');

          }else{
            safeLayers[index + 1] = layer[keys[index]];

          }
      });

      let layerNum = 0;
      this.test = [];
      let subsitute = Object.keys(safeLayers).map((Layer ,index)=>{
        layerNum++;
        let composeToReactComponent = safeLayers[Layer].map((items ,_index)=>{
          //this get each element in ech array
            // let createLayerItems = React.createElement(items[0],
            //   {ref:'Bubble-layer'+_index,key:UID(),className:`_bubbles-${layerNum}`}
            //   ,items.splice(1,items.length));
              let createLayerItems = <BubblesItem key={UID()} elm={'bubble-items-'+_index}>{items.splice(1,items.length)}</BubblesItem>

              //console.log(createLayerItems)
          return createLayerItems;
        });

        this.test.push(
          <BubblesLayer elm={'Bubble-layer-'+Layer} key={UID()}>
            {composeToReactComponent}
        </BubblesLayer>
      );


        //this.safe[Layer] = composeToReactComponent;
      });
      //console.log(test)
      pass = 1;
      //console.warn(keys , safeLayers)
      return pass;
    }
    error(msg){
      throw new Error(msg);
    }

    //array {HTMLCollection}
    calculatePositions(layers){
      let BASE = 200;
let layerShiftDelta = 0;
let indexClass = 0;
  let  itemsInLayer = function(item , index){
    item.className = '_bubbles-'+indexClass;


  }
layers.forEach((layer)=>{

  indexClass++;
  layerShiftDelta -= 200;

  let _itemsInLayer = cosmos.toArray(layer.children);
  _itemsInLayer.forEach(itemsInLayer);
  layer.style['transform'] = `translateX(${layerShiftDelta}px)`;
  layer.style.position = 'absolute';



});



    }
    componentDidMount(){
      actions_bubbles.cache({id:'bubbles' ,data:{component:this, refs:this.refs}})
      let layerKeys = Object.keys(this.refs)
      layerKeys.forEach((layer ,index ,array)=>{
        this.layers.push(
          ReactDOM.findDOMNode(this.refs[layer])
        );

        if(index+1 === array.length){
          this.calculatePositions(this.layers)
        }
      });

      //this.generateLayer(this.props.layers)
      console.log('REFS')
      //console.log(ReactDOM.findDOMNode(this.refs['bubble-layer-1']) ,ReactDOM.findDOMNode(this.refs['bubble-layer-2']));


    }


    render(){
      let css = {
        position:this.props.position || 'absolute',
        top:this.props.offset[0]+'px',
        left:this.props.offset[1]+'px'
      }
      return (
        <div text='container' style={css} className={'_bubbles '+this.props.className}>

          <div  text='anchor point' className='_bubbles-title'>{this.props.title || 'doo'}</div>

            {React.Children.map(this.props.children, (element, index) => {
                return React.cloneElement(element, { ref: element.ref});
              })}

        </div>
      )
    }
    }
