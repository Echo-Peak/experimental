import {Component} from '@angular/core';
import {Header} from '../header/index';
import {Footer} from '../footer/index';
import * from './extended-prototypes'
@Component({
selector:'app-mount',
templateUrl:'app-component.html',
directives:[Header , Footer]
})
export class APP{
  constructor(){


  }
}
