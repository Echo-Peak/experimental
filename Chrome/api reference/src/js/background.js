chrome.app.runtime.onLaunched.addListener(function(){
    var size = 0.5;
    chrome.app.window.create('index.html',{
        bounds:{
            height:Math.round(window.screen.height*size),
            width:Math.round(window.screen.width*size)
        },
        frame:{
            type:'chrome',
            color:'#fff',
            
        },
           minWidth:1000,
        minHeight:600
    })
})