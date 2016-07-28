import {Component} from '@angular/core';

@Component({
  selector:'app-code',
  template:`<code>Your destinify founded @ {{date}}</code>`

})
export class Footer{
  date:any;

  constructor(){
    setInterval(()=>{
      this.date = new Date().toLocaleTimeString();
    },1000)
  }
}
