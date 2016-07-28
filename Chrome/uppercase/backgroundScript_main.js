

(function uppercase_lowercase_background(chrome){
chrome.contextMenus.create({
    title:'To UPPER-CASE',
    id:'uppercase',
    contexts:['editable'],
    onclick:uppercaseText
});
chrome.contextMenus.create({
    title:'To lower-case',
    id:'lowercase',
    contexts:['editable'],
    onclick:lowercaseText
});


function uppercaseText(a){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {id:'uppercase',uppercase: a.selectionText || 'nothing'})
});

}

function lowercaseText(a){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {id:'lowercase',lowercase: a.selectionText || 'nothing'})
});
}  
})(chrome)