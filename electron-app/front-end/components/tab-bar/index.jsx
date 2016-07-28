import Tab from './tab';


export default class Tabs extends React.Component{
    constructor(props){
      super();
      this.state = {};
    }
    componentDidMount(){

    }
    componentWillMount(){

    }

    render(){

      return (
        <div className='tab-bar'>
          <ul>
            <Tab title='Home' icon='home'></Tab>
            <Tab title='Local' icon='windows'></Tab>
            <Tab title='Youtube' icon='youtube'></Tab>
            <Tab title='Sound Cloud' icon='soundcloud'></Tab>
            <Tab title='Bandcamp' icon='book'></Tab>
          </ul>
        </div>
      )
    }
    }
