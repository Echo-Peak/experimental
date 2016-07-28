
(function uppercase_lowercase(chrome){
   chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
            
        var activeElm = document.activeElement

        if (request.id == 'uppercase') {
            if (activeElm.tagName == 'INPUT' && activeElm.getAttribute('type') == 'text' || activeElm.tagName == 'TEXTAREA') {
                var replacedTextUpper = activeElm.value.replace(request.uppercase, request.uppercase.toUpperCase())
                activeElm.value = replacedTextUpper
            }
        }

        if (request.id== 'lowercase') {
            if (activeElm.tagName == 'INPUT' && activeElm.getAttribute('type') == 'text' || activeElm.tagName == 'TEXTAREA') {
                var replacedTextLower = activeElm.value.replace(request.lowercase, request.lowercase.toLowerCase())
                activeElm.value = replacedTextLower
                
            }
        }

    });
    //var extName = chrome.runtime.id;
    

})(chrome)