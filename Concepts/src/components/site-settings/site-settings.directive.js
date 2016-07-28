export default function siteSettings(){
Concepts.stores.Proto('SettingsDirective' ,siteSettings.prototype)

  let target;
  let shouldOpen = false;
  siteSettings.prototype.toggle = (bool)=>{
    shouldOpen = bool;
    update()
  }

  function displayNone(){
    target.style.display = 'none'
  }
  let open = ()=>{
    target.style.display = 'flex';
    setTimeout(()=>{
      target.style.opacity = '1'
      target.style.transform = `translate(0% ,0%)`;
    },500/2);

  }
  let close = ()=>{
      target.style.opacity = '0'
      target.style.transform = `translate(100% ,-100%)`;
    setTimeout(()=>{
      target.style.display = 'none';
    },500/2);
  }

  function update(){
    shouldOpen ? open() : close();
  }

  function link(scope,elm , attr){
     target = elm[0].children[0];
     update()
  }

    return{
        restric:'E',
        link:link,
        templateUrl:'site-settings/index'
    }
}
