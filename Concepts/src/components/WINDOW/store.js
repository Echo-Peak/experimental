export default class Store{
  constructor(){
    this._store = {};
    this.sets = {};
    this.memorize =[]
      this.error = function(msg){
        console.error(msg)
      }
      this.create = (storeName)=>{
        let validStoreName = storeName;

        if(typeof validStoreName =='string' && validStoreName.length){
          let privateObjects = Object.keys(this);
          let privateProto = Object.keys(Store.prototype);
          let _private = privateObjects.concat(privateProto);
          if(_private.indexOf(validStoreName) >= 0){
            throw new Error("'"+validStoreName+"'"+ ' exists on Store prototype, can not overwrite')
          }
          this._store[validStoreName] = {}
         this[validStoreName] = function(key , data){
           if(typeof key === 'string' && key.length){
                
               this._store[validStoreName][key] = data
               return this._store[validStoreName];
           }else{
             console.error(`Invaild key:'${key}', expected string.`)
           }



       }
        }else{
          this.error('invalid store name')
        }

        return this;
      }

  }
  getStore(storeName){
    return this._store[storeName];
  }

  info(){
    const temp = Object.assign({},this._store)
    var keys = Object.keys(temp);
    var size = (JSON.stringify(temp).length * 16) / (8*1024)
  return `Store length: ${keys.length} | Keys: ${keys} | size:${size.toFixed(2)}KB`
  }
  bounce(to,msg ,fn){
    this[to](msg,fn())
  }
  stores(){
    return this._store
  }
  createSet(key){
    this.sets[key] = new Set();
  }
  Set(key){
    let _keys = Object.keys(this.sets);
    console.log(_keys, key , this.sets)
    if(!~_keys.indexOf(key)){

      console.error("'"+key+"'",'no such Set')
    }else{

      return this.sets[key]
    }

  }
  mem(key,value){
    this.memorize.push({key:key, value:value});
    return this
  }
  memGet(key){
    let ready =[];

    this.memorize.forEach((item ,index)=>{
      if(key == item.key){
        ready.push(this.memorize[index])
      }
    });
    return ready
  }
}
