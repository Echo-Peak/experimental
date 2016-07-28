import {states} from './states';
import {views} from './views';
import animateView from './animateView';
export default function loopStates(stateProvider){
//`<inject-html-template template='${pageName}' persistent='true' class='ng-cloak'></inject-html-template>`;

  return angular.forEach(states ,function(pageName ,index){
      var pageName = pageName;
      stateProvider.state(pageName ,{
          //parent:'home',
          data:{
              title:pageName,
              cache:false//JSON.parse(localStorage.isCached) //needs a handler first
          },
          url:'/'+pageName,
          resolve:{
            checkStore:function($q ,local_cache, $state){
              let defer = $q.defer();
              let cache = local_cache.willCache();
              let targetUrl = `views/${pageName}/index.html`;
              if(typeof local_cache.get(targetUrl) == 'string'){
                return local_cache.get(targetUrl)
              }else{
                local_cache.get(targetUrl).then(function(content){
                  defer.resolve(content);

                });
                return defer.promise
              }

            }
          },

          views:{
              '@':{
                  controller:['$scope','checkStore','$element','$compile','local_cache',function($scope,checkStore , $element ,$compile ,local_cache){
                      let isString  = (typeof checkStore =='string') ? true : false;
                      let target = $element[0];
                      let content= document.createElement('div');;
                      let ready;
                      let perform = performance.now();
                      if(isString){

                        content.innerHTML = checkStore;
                        ready = $compile(content)($scope)
                        target.appendChild(ready[0]);
                        local_cache.log({status:'string',time:performance.now() - perform });

                      }else{

                        content.innerHTML = checkStore.data;
                        ready = $compile(content)($scope);
                        target.appendChild(ready[0]);
                        local_cache.log({status:'promise',time:performance.now() - perform});

                      }
                  }],
                  controllerAs:'state'
              }
          },
          onEnter:function(){
            let styleTag = document.createElement('style');
            document.head.appendChild(styleTag);
              animateView(styleTag)
          }
      });


  //these dont need controllers as they will inheirt from parrent ^^^^
      angular.forEach(views[pageName] ,function(item ,index){
          stateProvider.state(`${pageName}.${item}`,{
              parent:pageName,
              data:{
                  title:`${pageName} ${item}`
              },
              url:`/${item}`,
              views:{
                  '@':{
                      templateUrl:`../cache/${pageName}/${item}.html`
                  }
              }
          })
      });

  })
}
