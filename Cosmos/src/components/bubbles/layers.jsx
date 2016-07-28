import UID from '../decorators/uid';
export default class BubblesLayer extends React.Component{
    constructor(props){
      super();
    }
    componentDidMount(){
      console.log('sds')
      //console.log(this.refs)
    }
    render(){
      return <ul ref={this.props.ref} className={this.props.className}>
        {this.props.children}
      </ul>
    }
    }
