export default class Lsystem extends React.Component{
    constructor(props){
      super();
    }

    componentDidMount(){
      cosmos.store.set('Lsystem',{component:this ,refs:[], data:null});
    }
    render(){
      return (<div></div>)
    }
    }
