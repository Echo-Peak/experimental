export default String.prototype.toCamelCase = function(text){
  let newString ='';
  let words =/\w+/g;
  let string = this;
  let eachWords = string.match(words);
    let firstword;
    eachWords.forEach(function(word ,index){
     firstword =eachWords[0];
      if(index){
       let temp = word.replace(word.charAt(0) ,word.charAt(0).toUpperCase());
      newString += temp;
      }
    });
    return firstword+newString
}
export default String.prototype.toTitleCase = function(text){
let newString ='';
let words =/\w+/g;
let string = this;
let eachWords = string.match(words);
  eachWords.forEach(function(word){
    let temp = word.replace(word.charAt(0) ,word.charAt(0).toUpperCase());
    newString += temp+ ' ';
  });
return newString.replace(/\W$/ ,'');
}
//returns a boolean if a vaule is in array or not
export default Array.prototype.inArray = function(itemInArray){
  for(var i=0; i<this.length; i++){
    return ~this.indexOf(itemInArray) ? true : false
  }
}
export default function countPageReloads(){
  if(!localStorage.reloadCount){
localStorage.reloadCount = 0

}
var getReloadCount = localStorage.getItem('reloadCount');
var b = parseInt(getReloadCount)
localStorage.reloadCount = b + 1    

}
