
//for personal use...
export default function(){
  let ls = localStorage;
  if(!ls.reloadCount){
    ls.reloadCount = 0;
  }
let temp = parseInt(ls.reloadCount);
ls.reloadCount = temp + 1;


}
