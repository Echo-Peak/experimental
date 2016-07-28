Object.defineProperty(String.prototype, 'uid',{
  get:function(){
    var alphabet = 'abcdefghijkmnopqrstuvwxyz';
    alphabet += alphabet.toUpperCase();
    alphabet += '0123456789';
    alphabet.split('');

    var amount = 8;

    if(this.length >= 1 && parseInt(this) !== NaN && isNaN(parseInt(this)) == false){
      amount = parseInt(this);
    }
    var x = '';
    for(var i = 0; i < amount; i++){
      x += alphabet[Math.floor(Math.random()*alphabet.length)]
    }
    return x
  }
});

Object.defineProperty(Object, 'toJson',{
  get:function(){
    return JSON.stringify(this)
  }
});
Object.defineProperty(String.prototype, 'toObject',{
  get:function(){
    return JSON.parse(this)
  }
});
