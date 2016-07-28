var button = require('./app-menu-button');
var content = require('./app-menu-content');
class AppMenu extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
          openStyle:this.props.openStyle,
          isOpen:false
        }

    }
    componentDidMount(){
      cosmos.store.set('AppMenu',{component:this ,refs:[], data:null});
      var contentRef = this.refs['content-container'];

      switch (this.state.openStyle) {
        case 'top-left':contentRef.style['transform-origin'] = '0% 0%';
          break;
        case 'top-right':contentRef.style['transform-origin'] = '1000% 0%';
          break;
        case 'bottom-left':contentRef.style['transform-origin'] = '0% 100%';
          break;
        case 'bottom-right':contentRef.style['transform-origin'] = '100% 100%';
          break;

      }
    }
    setOpenState(){
      this.state.isOpen = !this.state.isOpen
      this.setState({
        isOpen:this.state.isOpen
      });
    }

    openMenu(){

      this.props.metaData.button.action();

var contentRef = this.refs['content-container'];
contentRef.style.transition = 'all .2s cubic-bezier(.17,.67,.39,.8)';

      const scale1 = ()=>{contentRef.style.transform='scale(1)'};
      const scale0 = ()=>{contentRef.style.transform='scale(0)'};

      const topLeft = ()=>{
        this.setOpenState();
        this.state.isOpen ? scale1() : scale0();
      }
      const topRight = ()=>{
        this.setOpenState();
          this.state.isOpen ? scale1() : scale0();
      }
      const bottomLeft = ()=>{
        this.setOpenState();
          this.state.isOpen ? scale1() : scale0();
      }
      const bottomRight = ()=>{
        this.setOpenState();
          this.state.isOpen ? scale1() : scale0();
      }


      switch (this.state.openStyle) {
        case 'top-left':topLeft();
          break;
        case 'top-right':topRight();
          break;
        case 'bottom-left':bottomLeft();
          break;
        case 'bottom-right':bottomRight();
          break;

      }

    }
    componentDidUpdate(){

    }
    render(){


      let _class;

        let offset = {
          margin:'5px',
          position:'fixed',

          boxShadow:'0px 0px 8px'

        }
        var metaData = this.props.metaData;
        var button;

        var content = metaData.content;

        switch (metaData.button.type) {
          case 'small': _class = 'small';
            break;
          case 'normal': _class = 'normal';
            break;
          case 'big': _class = 'big';
            break;
        }

        var button = <button className={_class,'appMenu-button'} onClick={this.openMenu.bind(this)}>{metaData.button.title}</button>

        return (
        <div className='App-menu'>
            <div>{button}</div>
            <div ref='content-container' className='App-menu-content' style={offset}>


              {content}
              </div>
            </div>
        )
    }
}

module.exports = {
    AppMenu:AppMenu,
    AppMenuButton:button,
    AppMenuContent:content
}
