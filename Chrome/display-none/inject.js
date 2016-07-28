

var elm = []

document.addEventListener('mousedown' ,function(e){
    if(e.button ===2){
        elm.push(e.target)
        var x =0;
        chrome.runtime.onMessage.addListener(boop)

        
        
        function boop(request){
            x++
           if(request.hide){
                 
                elm[elm.length-1].style.display ='none'    
            }
        }
    }
    
    if(e.button === 0){
        test.call(this ,e)
    }
    
})
var flag = false;
var oops = 0;
function test(r){
//    chrome.runtime.onConnect.addListener(function(port){
//        console.log(port)
//       port.onMessage.addListener(function(msg) {
//            console.warn('things' ,msg)
//            if (msg.type == 'first') {
//              console.warn('things')
//            }
//        
//        })
//    })
    
    
        chrome.runtime.onMessage.addListener(function(port){
            oops++;
            if(flag === false){
                
               
            if (port.show) {
              
            }
                flag = true 
            }else{
                return
            }
       
        
        })
 
   // console.warn(instanceof boot() ,'int')
    
}

    var elmsArray = []
    var doWork = function(e){

        if(e.target.id =='tester'){
            return
        }else{
                  e.preventDefault()
            e.target.style.outline ='1px solid red'
            elmsArray.push(e.target)
    
        }
     
    }
    var reset = function(){
        for(var i =0; i<elmsArray.length; i++){
            elmsArray[i].style.outline = '';
            if(i === elmsArray.length-1){
                elmsArray.length = 0;
                
                break
            }
        }
       
    }
    
    var hide  = function(){
        for(var i =0; i<elmsArray.length; i++){
            elmsArray[i].style.display = 'none';
        }  
        
    }
chrome.runtime.onMessage.addListener(function(sender){

        var div = document.createElement('div');
        var divid = document.getElementById('tester')
            div.setAttribute('style' ,'background:white; position:fixed; top:0; right:0; margin:25px; width:auto; padding:18px; cursor:pointer; z-index:2000;                                   box-shadow: 0px 0px 20px;')
      
            
            div.setAttribute('id' , 'tester')
            div.innerHTML ='Hide selected elements'
            div.addEventListener('click' ,hide)
    if(sender.enabled){
   
         document.body.appendChild(div)
       
        document.addEventListener('click' ,doWork)
    }else{
        reset()
        document.body.removeChild(divid)
        document.removeEventListener('click' ,doWork)

        chrome.runtime.sendMessage({status:false})

        
    }
    //console.warn(sender)
})


//var div2 = document.createElement('div');
//    div2.setAttribute('style' ,'position:relative; width:inherit; height:inheirt; background:purple')
//    
//document.addEventListener('mousemove' ,function(e){
//    //e.target.appendChild(div2)
//    e.target.parentElement.style.outline ='1px solid red'
//})




//var  mainBody = document.body.children[0] || document.body
//var mainBodyArray = mainBody.querySelectorAll('*')
//var dummy = [];
//
//for(var a= 0; a<mainBodyArray.length; a++){
//    dummy.push(mainBodyArray[a])
//}
//
//for(var i =0; i<dummy.length; i++){
//    if(dummy[i].tagName.toLowerCase() == 'br' || dummy[i].tagName.toLowerCase() == 'script'){
//        
//        var lol = dummy.splice(i ,1)
//        console.log(lol.length ,lol)
//    }
//}
//
//




