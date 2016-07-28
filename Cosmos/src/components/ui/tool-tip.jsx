export default class ToolTip  extends React.Component{
    constructor(props){
      super();
    }
    componentDidMount(){
      Global_actions.set(null,{id:'ToolTip',action:'CACHE_ALL',data:this})
    }
    render(){
      return (
        <div>
          <span></span>
        </div>
      )
    }
    }
