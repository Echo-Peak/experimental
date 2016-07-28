export default class ImgManip extends React.Component{
    constructor(props){
      super();
    }

    componentDidMount(){
      cosmos.store.set('ImgManip',{component:this ,refs:[], data:null});
    }
    render(){
      return (<div></div>)
    }
    }
