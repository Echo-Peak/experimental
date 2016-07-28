export default function appGesture($state){

    return{
        scope:{
            appGesture:'@'
        },
        link:function(scope , elm ,attr){
            var  w = 0;
            //console.log(attr.appGesture ,'appGesture' ,'stufffffffff');

            let movement;
            let deltaX = 100;
            let deltaY = 50;
            let options ={
                //enterfunctions here to apply
                left:function(){
                      //alert('up')
                    $state.go('root.home')
                    //TweenMax.fromTo(elm[0],2,{backgroundColor:'red'} ,{backgroundColor:'#fc2'})
                }
            }
            var gesture = {

                horizontal:function(e){
                    movement = e.changedTouches[0].clientX;
                    //alert('mouse down')
                    console.log(e)
                },

                vertical:function(e){

                    //movement = e.clientY
                },
                left:function(e){
                   // alert('left')

                var diff1 = movement - e.changedTouches[0].clientX;
               if(diff1 > deltaX){

                    options.left()
                    }
                  // debugger;
                },
                right:function(e){
                    var diff2 = e.clientX- movement;
                    if(diff2 > deltaX){
                         options.right()
                    }
                },
                up:function(e){
                    var diff3 = movement- e.clientY;
                    if(diff3 > deltaY){
                         options.up()
                    }
                },
                down:function(e){
                    var diff4 = e.clientY- movement;

                    if(diff4 > deltaY){

                        return options.down()
                    }
                },
            }
            switch(attr.appGesture){

                case 'left': elm[0].addEventListener('touchstart',gesture.horizontal ,false);elm[0].addEventListener('touchend',gesture.left);
                    break;
                case 'right': elm[0].addEventListener('mousedown',gesture.horizontal);elm[0].addEventListener('mouseup',gesture.right);
                    break;
                case 'up': elm[0].addEventListener('mousedown',gesture.vertical);elm[0].addEventListener('mouseup',gesture.up);
                    break;
                case 'down': elm[0].addEventListener('mousedown',gesture.vertical);elm[0].addEventListener('mouseup',gesture.down);



            }


        }
    }
}
