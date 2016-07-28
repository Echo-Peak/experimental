
export default function (stateProvider){
  stateProvider
       .state('home' ,{
       url:'/home',
          data:{
           title:'Home'
       },
       views:{
           '@':{
               templateUrl:'router/views/homepage/index'
           }
       }

   })
  .state('about' ,{
      url:'/about',
      data:{
          title:'About'
      },
      views:{
          '@':{
              template:'About',

          }
      }
  })
  .state('contact' ,{
      url:'/contact',
      data:{
          title:'Contact'
      },
      views:{
          '@':{
              template:'Contact',
          }
      }
  })
}
