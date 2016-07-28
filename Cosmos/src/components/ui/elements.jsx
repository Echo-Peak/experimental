
//import classNames from 'classnames';
class _h1 extends React.Component{
    constructor(props){
        super();
        this.props = props
    }
    render(){
      let styles ={
        padding:this.props.padding,
        color:this.props.color,
        fontSize:this.props.size
      }
      return <h1 style={styles}>{this.props.children}</h1>
    }
}
class _h2 extends React.Component{
    constructor(props){
        super();
        this.props = props
    }
    render(){
      let styles ={
        padding:this.props.padding,
        color:this.props.color,
        fontSize:this.props.size
      }
      return <h2 style={styles}>{this.props.children}</h2>
    }
}
class _h3 extends React.Component{
    constructor(props){
        super();
        this.props = props
    }
    render(){
      let styles ={
        padding:this.props.padding,
        color:this.props.color,
        fontSize:this.props.size
      }
      return <h3 style={styles}>{this.props.children}</h3>
    }
}
class _h4 extends React.Component{
    constructor(props){
        super();
        this.props = props
    }
    render(){
      let styles ={
        padding:this.props.padding,
        color:this.props.color,
        fontSize:this.props.size
      }
      return <h4 style={styles}>{this.props.children}</h4>
    }
}
class _h5 extends React.Component{
    constructor(props){
        super();
        this.props = props
    }
    render(){
      let styles ={
        padding:this.props.padding,
        color:this.props.color,
        fontSize:this.props.size
      }
      return <h5 style={styles}>{this.props.children}</h5>
    }
}
class _button extends React.Component{
    constructor(props){
        super();
        this.props = props
    }
    render(){
      let classes = '_button';
switch (this.props.type) {
  case 'sm':classes += ' sm'
    break;
  case 'md':classes += ' md'
  break;
  case 'lg':classes += ' lg'
  break;
  case 'xl':classes += ' xl'
    break;
}


      return <button className={classes} onClick={this.props.onClick}>{this.props.children}</button>
    }
}
class _input extends React.Component{
  constructor(props){
    super();
  }
  render(){
    let custumStyles = this.props.css;
    return (<input style={custumStyles}
      type={this.props.type}
      className='_input'
      value={this.props.value}
      id={this.props.switch}
      max={this.props.minmax[1]}
      min={this.props.minmax[0]}
      onChange={this.props.calculate}/>)
  }
}
let elements = {
  H1:_h1,
  H2:_h2,
  H3:_h3,
  H4:_h4,
  H5:_h5,
  Button:_button,
  Input:_input

}

export {elements}
