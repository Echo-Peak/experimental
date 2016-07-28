let finds = [];

let theKeys = 'emerald lake'.split(''); //its dubmb i know

let boxPos = {
  solved:[]
}
function solver(){

if(theKeys === finds){
  solver.congrats.ref()
}
}
solver.congrats = function(DOM , animate){
  solver.congrats.ref = function(){

  }
}



function check(input ,callback){
  Firebase.children('public').child(input).once('value' ,callback)
}





function fragment(target){
  let amount = Math.floor(5+Math.random() *80);
  console.log('d')
  let frag = document.createDocumentFragment();
    let hueRotate = Math.floor(1+Math.random()*3)
  target.style.background = '';
  for(var i = 0; i<amount; i++ ){
    let partical = document.createElement('div');
    let r =Math.floor((100*hueRotate)+ Math.random()*155);
    let b =Math.floor((10*hueRotate) + Math.random()*155);
    let g = Math.floor(hueRotate * Math.random()*10);
    let shimmer = 4 + Math.random() *10;
    let opacity = Math.floor(Math.random()*100);
    partical.style.background = `rgba(${r} ,${g} ,${b} , ${opacity/100})`;
    partical.style.width = '10px';
    partical.style.height = '10px';
    partical.style.position= 'absolute';


    (function(i){
      let rand =  Math.floor(Math.random()*600);
      let X = Math.floor(Math.random()*100);
      let Y = Math.floor(Math.random()*100);
      setTimeout(function(){
        partical.style.transform = `translate(${X}px ,${Y}px)`
      },rand)
    })(i);
    frag.appendChild(partical)

  }
  target.appendChild(frag)

}

function mixagain(list){
  let hueRotate = Math.floor(1+Math.random()*3)
  for(var i = 0; i<list.length; i++ ){
    let r =Math.floor((100*hueRotate)+ Math.random()*155);
    let b =Math.floor((10*hueRotate) + Math.random()*155);
    let g = Math.floor(hueRotate * Math.random()*10);
    let shimmer = 4 + Math.random() *10;
    let opacity = Math.floor(Math.random()*100);
    list[i].style.background = `rgba(${r} ,${g} ,${b} , ${opacity/100})`;




  }
}


function flip(box,target){
let elm = target.target;
console.log(elm.code , finds)



  if(elm.getAttribute('fliped') === 'false'){
    box.setAttribute('fliped' ,'true');

    fragment(elm);
    if(elm.code){
      let createElm = document.createElement('div');
      elm.appendChild(createElm);
      elm.style.transform = 'scale(1.4)';
      // var qrcode = new QRCode(createElm, {
      //         text: `key ->     ${elm.code}`,
      //         width: 100,
      //         height: 100,
      //         colorDark : "#000000",
      //         colorLight : "#ffffff",
      //         correctLevel : QRCode.CorrectLevel.H
      //     });

      setTimeout(function(){
        elm.style.transform = 'scale(1)';
      },200)
      finds.push(elm.code);
    }
  }else{
    box.setAttribute('fliped' ,'false');
    elm.style.background = 'green';
  }
  solver()
}



let list = [];
let secerts = [];
let _symbols = '$^ KO NM OW $> -> || -) WQ AS UY NQ GH FR WD 91 20'.split(' ');
export default function(){

  let actions = {
    init(startingAmount, DOM ,animate){
      this.amount = startingAmount;
      let frag = document.createDocumentFragment();

      solver.congrats(DOM, animate);

      for(var i = 0; i<startingAmount; i++ ){
        let box = document.createElement('div');
        let r =Math.floor(100+ Math.random()*155);
        let b =Math.floor(100+ Math.random()*155);
        let shimmer = 4 + Math.random() *10;
        let opacity = Math.floor(Math.random()*100);
        // let front = document.createElement('div');
        // let front2 = document.createElement('div');
        list.push(box)
        box.style.background = `rgba(${r} ,0 ,${b} , ${opacity/100})`;

        box.setAttribute('fliped' ,'false');
        box.style.animation = `shimmerEffect ${shimmer}s`;


        box.classList.add('box');
        frag.appendChild(box);
        box.onclick = flip.bind(null,box);


      }

      for(var k =0; k<theKeys.length; k++){
        let item = list[Math.floor(Math.random()*list.length)];
        item.code = theKeys[k];
        secerts.push(item);
        item.onclick = mixagain.bind(null, list)
      }

      for(var k =0; k<_symbols.length; k++){
        let item = list[Math.floor(Math.random()*list.length)];
        item.code = _symbols[k];
      }


      DOM.boxes.appendChild(frag)
    }

  }
  return actions
}
