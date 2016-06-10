import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Demo1Component } from './demo-1/demo1.component';
import { Demo2Component } from './demo-2/demo2.component';
import { Demo3Component } from './demo-3/demo3.component';

import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/demo1', name: 'Demo1', component: Demo1Component, useAsDefault: true},
    {path: '/demo2', name: 'Demo2', component: Demo2Component},
    {path: '/demo3', name: 'Demo3', component: Demo3Component}
])
export class AppComponent { }
