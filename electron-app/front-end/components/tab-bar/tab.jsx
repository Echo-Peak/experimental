
 let {hashHistory} = window.ReactRouter;

export default class Tab extends React.Component{
    constructor(props){
      super();
      this.state = {};
    }
    componentDidMount(){

    }
    componentWillMount(){

    }
    gotoPage(){
      hashHistory.push('/'+this.props.title.toLowerCase());
    }

    render(){
      return (
        <li className='tab' onClick={this.gotoPage}>
          <div><i className={'fa fa-'+this.props.icon+ ' tab-icon-'+this.props.icon}></i></div>
          <div><h5>{this.props.title}</h5></div>
        </li>
    )
    }
    }
