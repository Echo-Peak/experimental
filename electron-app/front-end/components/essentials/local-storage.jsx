export default function(){
  let state = {
    location:null,
    volume:0,
    playlist:null,
    youtubeAuth:null,
    isMuted:false,
    seek:0,
    lastItem:null,
  }
let toKey = Object.keys(state);

if(!localStorage['app'] || localStorage['app'] === (null || undefined)){
  localStorage['app'] = JSON.stringify(state);
}


}
