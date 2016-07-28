module.exports=  function render(template){
    console.log('render' ,template)
    return function(target){
        console.log('tarfget' ,target.prototype)
        
        
        target.prototype.render = function(){return template}
    }
}
