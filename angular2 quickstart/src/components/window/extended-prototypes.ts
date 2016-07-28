HTMLElement.prototype.getAttr = function(){

  return Array.apply(null , this.attributes)
    .reduce((start ,item)=>{
    start[item.name] = item.nodeValue;
    return start
   },{});
}
