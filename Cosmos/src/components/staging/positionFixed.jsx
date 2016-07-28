export default class PositionFixed  extends React.Component{
    constructor(props){
      super();
    }
    componentDidMount(){
      cosmos.store.set('PositionFixed',{component:this ,refs:[], data:null});
    }
    render(){
      return <div style={{position:'fixed',zIndex:'1000',bottom:'0',right:'0', margin:this.props.margin}}>{this.props.children}</div>
    }
    }
