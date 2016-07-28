let electron = require('electron');

export default class LocalMenu extends React.Component{
    constructor(props){
      super();
      this.state = {
        location:null,
        isFileSystemOpen:false

      };
    }
    componentDidMount(){

    }
    componentWillMount(){

    }

    openFileSystem(){

      electron.remote.dialog.showOpenDialog(
        {title:'Open Folder',
          filters:[{name:'Music',extensions:['mp3' ,'oog'] }],
          defaultPath:'C:/',
          properties:['openDirectory','openFile','multiSelections']
        },function(directory){
          electron.ipcRenderer.send('platform-local-menu' ,directory)
        });

      this.setState({
        isFileSystemOpen:true
      });
    }
    render(){
      return (<div className='platform-local-menu'>
      <ul>
          <li onClick={this.openFileSystem.bind(this)}>Open folder</li>
          <li>play file</li>

      </ul>
    </div>)
    }
    }
