import MediaBar from '../media-bar';
export default class Homepage extends React.Component{
    constructor(props){
      super();
      this.state = {
        dynamicBackground:false
      };


    }
    componentDidMount(){
      console.log(this.props.route.path)
    }
    componentWillMount(){

    }
    dynamicBackground(){

    }

    render(){
      let items = [
        {title:'Youtube',icon:'youtube'},
        {title:'Sound Cloud',icon:'soundcloud'},
        {title:'Local',icon:'windows'},
        {title:'Bandcamp',icon:'book'},
      ]
      return (<div className='homepage'>


        <div className='home-menu'>
          <div className='home-menu-version'><span>v 0.2</span></div>
          <div className='home-menu-menu'></div>
        </div>

        <div className= 'home-aside'>
            f
        </div>

      </div>)
    }
    }
