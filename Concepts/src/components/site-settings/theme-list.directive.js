export default function($compile , THEME_KEYS , $themes){
    let link = function(scope , elm){
        let built = [];
        let updated = [];
        let compile = null;
        let self = this;
        let once =true;
        THEME_KEYS().forEach(build);
    function recompile(target ,keys){
      compile = null;
      built = [];
      keys.forEach(build)
    }

        function build(item , index , arr){

            let mdButton = document.createElement('md-button');
            mdButton.setAttribute('ng-click' ,`settings.applyTheme('${item}')`);
            mdButton.innerText = item;
            let mdMenuItem = document.createElement('md-menu-item');
            mdMenuItem.appendChild(mdButton);
            built.push(mdMenuItem);

            if(index+1 === arr.length){
                render();
            }
        }


        function render(){

          let compiled;
          if(once){

            compiled = $compile(built)(scope);
            elm.append(compiled)
              once = false;

          }else{
            let once = built.pop();
            compiled = $compile(once)(scope);
            elm.append(compiled)
          }

        }
       scope.$on('recompile-themes',recompile)

    }
    return {
        scope:true,
        restric:'E',
        link:link
    }
}
