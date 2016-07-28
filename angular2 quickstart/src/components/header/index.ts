import {Component ,ElementRef } from '@angular/core';



HTMLElement.prototype.stuff = function(){

  return {nums:92, el:this}
}
@Component({
  selector:'app-header',
  templateUrl:'header.html'

})
export class Header{

  constructor(e:ElementRef){
    console.log(this ,e.nativeElement.stuff())
  }
}
