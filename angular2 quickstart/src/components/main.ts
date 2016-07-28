import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {namespace} from './window/index';
import {windowName} from './window/window.name';

windowName.name = 'something';
console.log(windowName)
let angularApp = namespace.mainComponent()

bootstrap(angularApp);
