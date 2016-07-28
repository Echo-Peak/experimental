export default class local_cache{
  constructor($q ,$http , $state){
    Concepts.stores.Proto('localCache',this);
    this.$q = $q;
    this.$http = $http;
    this.state = $state;
    this.get = this.get;
    this.requests = 0;
    this.cache = false;
    this.log = this.log;
    this.logs = [];
    Concepts.info.http = [];

    const first_run = ()=>{
      if(!localStorage.cache || localStorage.cache === 'null' || localStorage.cache === 'undefined'){
        localStorage.cache = false;
      }
      this.cache = localStorage.cache;
    }
    first_run()
  };

  toggleCache(){

  }
  get(url){
    this.requests ++;
    let defer = this.$q.defer();
    let path = url.replace(/\\/,'');
    let key = url.match(/\/(.*)\//).pop();
    let prefix = 'TEMPLATE_';
    if(JSON.parse(localStorage.cache)){

      if(localStorage[prefix + key]){
        return localStorage[prefix + key];
      }else{
        this.$http.get(url).then((html)=>{
          localStorage[prefix + key] = html.data;
          defer.resolve(html);
          console.log(html.data)
          Concepts.info.http.push({id:this.requests, url:url , timeStamp:Date.now()});
        });
        return defer.promise
      }
    }else{

      Concepts.info.http.push({id:this.requests, url:url , timeStamp:Date.now()});
      return this.$http.get(url)
    }

  }
  willCache(){
    return this.cache;
  }
  log(obj){
    this.logs.push(obj)
  }
  clear(){
    let ls = Object.keys(localStorage);
    let templatePrefix = /TEMPLATE_/;
    let count = 0;
    ls.forEach(function(key, index ,array){
      if(templatePrefix.test(key)){
        count ++;
        delete localStorage[key];
      }
      if(index+1 == array.length){
        console.log('local templates cleared', count +' in total')
      }
    })

  }

}
