export default function($compile){
  return function(scope ,elm){
      let $elms = ''
      let compile = (item ,index ,arr)=>{
          let mdButton = document.createElement('md-button')
          mdButton.setAttribute('ui-sref' , item[1])
          //mdButton.setAttribute('class' , 'fa fa-'+item[2])
          mdButton.setAttribute('ng-style' ,'global.$theme.accent')
          mdButton.innerText = item[0];
          $elms += mdButton.outerHTML

          if(index+1 === arr.length){
              render()
          }
      }
      function render(){
          let compiled = $compile($elms)(scope)
          elm.append(compiled)
      }

      scope.$on('menu-list' ,function(target ,data){
          data.forEach(compile)
      })
  }
}
