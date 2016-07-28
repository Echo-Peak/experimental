function showQR(elm ,code ,width){

  var qrcode = new QRCode(elm, {
          text: `key ->     ${code}`,
          width: width || 100,
          height: width || 100 ,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      });


}

export default function(renderREF ,DOM , animate ,firebase){

function checker(found){
  let ref = firebase.child('public').child('secerets').child(found).once('value',function(seceret){
    let data = seceret.val();
    let parsedUrl = data.replace(' ','-')
    let loadUrl = `https://little-artic.firebaseio.com/public/secerets/${parsedUrl}`;

    DOM.qrParams.onclick = function(){
      window.location.href  = window.location.href+`?canvas=${parsedUrl}`
    }
    showQR(DOM.qrParams , loadUrl ,250);
    DOM.qrParams.title = '';
    animate('show', DOM.win ,400 ,'animate');

  });


}


  let actions = {
    init(){

      DOM.boxes.addEventListener('click' ,this.delagate)
      DOM.enter.onclick = this.checkInput;
      DOM.keyInput.addEventListener('keydown',this.keyBoardCheck)
    },
    keyBoardCheck(e){
        if(e.keyCode === 13){
          checker(e.target.value);
        }
    },
    checkInput(){
      if(DOM.keyInput.value){

        checker(DOM.keyInput.value);
        DOM.keyInput.value = ''
      }
    },
    delagate(e){
      let elm = e.target;
      if(elm.tagName ==='UL'){
        return false
      }
      if(elm.code){
        elm.style.boxShadow ='0px 0px 50px rgb(38, 196, 40)';
        animate('show',elm,500,'found' ,'inline-block');
        showQR(elm ,elm.code);
        elm.title= 'You found a clue';



      }else if(elm.reset){

        let stripAlpha = elm.style.background.match(/\d{1,}/g);
        let x = elm.offsetLeft;
        let y = elm.offsetTop;
        elm.style.left = x+'px';
        elm.style.top = y+'px';
        elm.style.position ='fixed';
        elm.style.zIndex = 2;

        elm.style.background = `rgb(${stripAlpha[0]} ,${stripAlpha[1]} ,${stripAlpha[2]})`;

        console.log(elm)
        animate('show',elm,500,'super-scale').wait(function(){
          let newAmount = Math.floor(40 +Math.random()*102)
          renderREF.clear();
          renderREF.draw(newAmount);
          animate('hide',elm,500,'super-scale');

        });

      }else{
        renderREF.hide(elm)
      }


    }
  }
return actions
}
