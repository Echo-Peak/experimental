import {elements} from '../ui/elements';
import axios from 'axios';
import UID from '../decorators/uid';
let {Link,Route,Router} = window.ReactRouter;
const {H1, Button} = elements

export default class Ajax  extends React.Component{
    constructor(props){
      super();
      this.state = {
        isCached:false,
        isLoaded:false,
        data:null,
        flow:null
      };


    }
    componentDidMount(){
      cosmos.store.set('ajax',{component:this ,refs:[], data:null});
      let self = this;
      let peeps = [];

      let doWork = function(item, index , array){
        peeps.push(
        <li key={UID()} style={{padding:'10px'}}>
        <span>{item.id}</span>
        <h4>{item.name} {item.gender}</h4>
        <div>
          <img src={item.picture}/>
        </div>
        <h5>{item.balance}</h5>
        <p>{item.about}</p>
      </li>);
      index+1 === array.length ? self.setState({data:peeps}) : void 0
        }
        let request = function(data){
          data.data.forEach(doWork)
          localStorage['ajax'] = JSON.stringify(data)
        }

        if(localStorage['ajax']){
            try{
              JSON.parse(localStorage['ajax']).forEach(doWork)
            }catch(e){
              axios.get('DB/people.json').then(request)
            }

        }else{

          axios.get('DB/people.json').then(request)
        }

    }
    render(){
      return (
        <div className='_ajax'>
          <Link to='/'>
            <Button>Back</Button>
          </Link>


          <H1 padding={10}>AJAXIFY IT UP!!!</H1>
          <code>status
            <br/>
            cached:{this.state.isCached}
            <br/>
            load:{this.state.isLoaded}

          </code>
          <h4>list..</h4>
          <ul>{this.state.data}</ul>

          <div>


          </div>
        </div>
      )
    }
    }
