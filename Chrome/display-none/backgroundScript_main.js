chrome.contextMenus.create({
    title:'Hide Element',
    id:'hide',
    contexts:['all'],
    onclick:hide
});


chrome.contextMenus.create({
    title:'undo last action',
    id:'undoHide',
    contexts:['all'],
    onclick:undoHide
});

//chrome.commands.create({
//    



//})


function hide(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {hide:true}, function(response) {

      
  });
});

}

function undoHide(){

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      chrome.tabs.sendMessage(tabs[0].id, {show:true}, function(response) {

      
  });
//    var port = chrome.tabs.connect(tabs[0].id);
//      
//      port.postMessage({type: "first", content: "Hi!"});
    
    
});
}



var flag = false
chrome.browserAction.onClicked.addListener(function(){
    flag = !flag
    
    chrome.runtime.onMessage.addListener(function(sender){
        if(sender.status == false){
          chrome.browserAction.setIcon({path:'icon.png'})  
        }
    });
    
    if(flag){
        chrome.browserAction.setIcon({path:'logo.png'})
    }else{
        chrome.browserAction.setIcon({path:'icon.png'})
    }  
      
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            chrome.tabs.sendMessage(tabs[0].id ,{enabled:flag})
    
    
});
      
      
      
    console.log('clicked' ,flag)
    
})



