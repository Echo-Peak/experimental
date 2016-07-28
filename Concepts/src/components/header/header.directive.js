export default function Header() {
    return {
        restric:'A',
        templateUrl:'header/index',
        link:function(scope,elm,attr){
          let targetBackground = elm[0].querySelector('.header-flexbox');


          // setTimeout(()=>{
          //   let placeholder = targetBackground.style.background
          //   let bgValues = placeholder.match(/\d{2,3}/g);
          //
          //   let aplphaBackground = `rgba(${bgValues[0]},${bgValues[1]} ,${bgValues[2]} ,0.8)`;
          //
          //   scope.$on('scroll-event', function(target ,pageY){
          //     if(pageY > 100){
          //         targetBackground.style.background = aplphaBackground
          //     }else{
          //         targetBackground.style.background = placeholder
          //     }
          //   })
          //
          // },0)

        }
    }
}
