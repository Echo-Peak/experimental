export default function createTheme(){
  Concepts.stores.Proto('createThemeDirective',createTheme.prototype);
    let link = function(scope,elm ,attr){
        //gets elements requierd
        let $elms = elm[0].children[0].children;
        let input = $elms[0].querySelector('input');
        let colorSwatches = $elms[1].children;
        let color = colorSwatches[0].querySelector('input');
        let background = colorSwatches[1].querySelector('input');
        let accent = colorSwatches[2].querySelector('input');
        let ui = elm[0].children[0];
        let timeline = new TimelineMax();
        let closeButton = elm[0].querySelector('#close');
        //let animate = new TweenMax(ui ,0, {x:100 ,y:-100, height:0, zIndex:-1, width:0, ease:null, opacity:0});
        let regex = /[a-z]/ig;

        //regex for input to only allow chars a-z and A-Z

        //md-button trigger

        //this is used for this scope for watching Bridge.custumTheme.status boolean
        //toggles Bridge.custumTheme.status boolean


      createTheme.prototype.open = function(){
        ui.style.display = 'flex';
        setTimeout(function(){
          ui.style.transform = 'translate(0% ,0%)';
          ui.style.opacity ='1';
          ui.style.width =  '300px';
          ui.style.height ='210px';
        },500);

      }
      createTheme.prototype.close = function(){
          ui.style.transform = 'translate(100% ,-100%)';
          ui.style.opacity ='0';
          ui.style.width =  '0';
          ui.style.height ='0';
        setTimeout(function(){
          ui.style.display = 'none'
        },500);

      }
      let placeholder = {}
      function process(){
        let regex = /[^a-zA-Z ]/g
            if(input.value === ''){
              alert('input is empty')
            }else if(regex.test(input.value)){
              alert('malform string')
            }else{
              placeholder.title = input.value;
              placeholder.text = color.value;
              placeholder.background = background.value;
              placeholder.accent = accent.value;
              Concepts.stores.getStore('Proto').$themes.createTheme(placeholder)
              Concepts.stores.getStore('Proto').Settings.updateCurrentTheme(placeholder.title)
            }

      }

      function delegater(e){

        switch(e.target.id || e.target.parentNode.id){
          case 'close':createTheme.prototype.close();
            break;
          case 'applyTheme' : process();
            break;
        }
      }
      ui.addEventListener('click',delegater)

    }
    return{
        link:link,
        templateUrl:'site-settings/create-theme'
    }
}
