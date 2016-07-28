export default class BinaryText extends React.Component{
    constructor(props){
      super();
    }

    componentDidMount(){
      cosmos.store.set('BinaryText',{component:this ,refs:[], data:null});
    }
    render(){
      return (<div></div>)
    }
    }
