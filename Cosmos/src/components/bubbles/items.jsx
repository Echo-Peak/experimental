
import UID from '../decorators/uid';

export default class BubblesItem extends React.Component{
    constructor(props){
      super();
    }
    componentDidMount(){
    }
    render(){
      return <li ref={this.props.ref}>{this.props.children}</li>
    }
    }
