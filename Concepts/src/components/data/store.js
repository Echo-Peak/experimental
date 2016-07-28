export default class $store{
    constructor($templateRequest ,$q){

        this.ls = localStorage;
        this.$templateRequest = $templateRequest;
        this.$q = $q;
        this.poop = null;
    }
    check(filename ,flag){
        let localStorageKeys = Object.keys(this.ls)
        this.filename = filename

        if(!localStorageKeys.inArray(filename)){
           this.request(filename)
        }

        if(flag){
            return localStorageKeys.inArray(filename)
        }else{
          return this.get(filename)
        }


            //creates a http request for the file name passed by attribute from 'html-inject-directive' < ui.router
    }

    get(filename){
        return this.ls.getItem(filename)
    }

    request(templateName){

         var deffer = this.$q.defer();
        let self = this;

        this.$templateRequest(`../views/${templateName}.html`).then(function(data){
            deffer.resolve(data)


        });
        return deffer.promise
    }

    capture(templateName){
        let deffer = this.$q.defer();
        let self = this;

        this.$templateRequest(`../views/${templateName}.html`).then(function(data){
            deffer.resolve(data)

                self.ls.setItem(templateName ,data)


        });
        return deffer.promise
    }
    size(key){
        var keySize = ((this.ls.getItem(key).length*2)/1024).toFixed(2);
        console.log('%c '+key  + ' | Size:' +keySize+'KB' ,'color:red; background:#e0e0e0;')
    }

    removal(){
        let matches = [];
        let keys = Object.keys(this.ls)
        let getSelected = (item ,index , arr)=>{
            if(/^</.test(this.ls[item])){

                delete this.ls[item]
               console.log('THESE ARE TO BE REMOVED' ,item)

            }

        }

        keys.forEach(getSelected)

    }

}

/*
var a = new Store();
a.create('foobar');
a.foobar('ssd',{one:89});
a.createSet('hookers');

a.Set('hookers').add(28938).add(true);
a.mem('kay' ,29).mem('flow',{one:73}).mem('kay',29)
console.log(a.getStore('foobar') ,a.memorize, a.memGet('kay'))



*/
