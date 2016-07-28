import actions_ui from './actions';
export default class PositionFixed  extends React.Component{
    constructor(props){
      super();
    }
    componentDidMount(){
      actions_ui.cache({id:'PositionFixed', data:this},false)
    }
    render(){
      return <div style={{position:'fixed',zIndex:'1000',bottom:'0',right:'0', margin:this.props.margin}}>{this.props.children}</div>
    }
    }
