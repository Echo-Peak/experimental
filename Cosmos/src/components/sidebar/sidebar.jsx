import UID from '../decorators/UID';
import {actions_sidebar} from './actions';
let {Link} = window.ReactRouter;
import {FAarray , randomIcon} from '../bits n bobs/FAarray';
export default class Sidebar extends React.Component{
  constructor(props){
    super();

    this.generateMenuContent = this.generateMenuContent;
    let menuButtons = [
      {title:'L system Generator' ,url:'#/one'},
      {title:'Random color Generator' ,url:'#/one'},
      {title:'Image src manipulation' ,url:'#/one'},
      {title:'Audio Manipulation' ,url:'#/one'},
      {title:'Random generator' ,url:'#/one'},
      {title:'lorem ipsum generator' ,url:'#/one'},
      {title:'binary to text' ,url:'#/one'},
      {title:'text to binary' ,url:'#/one'},
      {title:'canvas random shapes' ,url:'#/'},
      {title:'Ajax manipulation'},
      {title:'twiter'}

    ];


    this.menuData = [menuButtons]
    this.state = {
      isOpen:true
    }
  }
  componentDidMount(){
    actions_sidebar.cache({id:'sidebar', data:{commponent:this , refs:[this.refs.container]}})
  }
generateMenuContent(){
  const colors = function(){
    let hue = Math.floor(Math.random()*1000);
    let sat = Math.floor(80 + Math.random()*10);
    let light = Math.floor(50 + Math.random()*10);

    return `hsl(${hue}, ${sat}% , ${light}% )`;
  }
var listings = [];

this.menuData[0].map((item ,index)=>{
  var href = item.title;
  var hrefs = href.toLowerCase().replace(/ /g,'-');
  let styles = {
    paddingRight:'10px',
    fontSize:'1.5em',
    color:colors()
  }
  listings.push(
    <Link to={'/'+hrefs} key={UID()}>
      <li>
        <span className={'fa fa-'+randomIcon()} style={styles}></span>
        {item.title}
      </li>
    </Link>
  )
});
  return listings
}
  render(){
    let resetVieTitle = function(){
      actions_sidebar.resetVeiwTitle('Home')
    }
    return(
      <div className='_sidebar' ref='container'>
          <div className='_sidebar-container'>
            <header>
              <div className='map-padding'>
                <div className='map'>
                    <img src='http://placehold.it/150x100'/>
                </div>

              </div>
              <div>
                  <Link to='/' onClick={resetVieTitle}>
                    <h4>TITLE</h4>
                  </Link>
              </div>

            </header>

            <section>
              {this.generateMenuContent()}
            </section>

            <footer>
              <Link to='/contact'>
                <h4 style={{padding:'10px' ,color:'white'}}>Snail Mail: echopeakdev@gmail.com</h4>
              </Link>
            </footer>

          </div>
      </div>
    )
  }
}
