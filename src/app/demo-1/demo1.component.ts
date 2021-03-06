import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';
import { DataService } from './data.service';

@Component({
    template: `
        <h3>Demo-1: Change Detection Strategies / Immutability</h3>
        <parent [tag]="1"></parent>
        <parent [tag]="2"></parent>
    `,
    directives: [ParentComponent],
    providers: [DataService]
})
export class Demo1Component {}
