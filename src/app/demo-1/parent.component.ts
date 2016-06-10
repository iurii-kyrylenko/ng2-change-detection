import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import { IItem } from './item';
import { ChildComponent } from './child.component';

@Component({
    selector: 'parent',
    template: `
        <div class="parent">
            <p>
                <button id="add-m" (click)="addItemToMutableArray()">+ m</button>
                <button id="add-i" (click)="addItemToImmutableArray()">+ i</button>
            </p>
            <child [tag]="tag" [data]="data"></child>
        <div>
    `,
    styles: [`
        .parent {
            display:inline-block;
            margin: 10px
        }
    `],
    directives: [ChildComponent]
})
export class ParentComponent implements OnInit {

    @Input() tag: string;

    data: IItem[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData().subscribe(data => this.data = data);
        //this.dataService.getDataPromise().then(data => this.data = data);
    }

    addItemToMutableArray() {
        if (!this.data) return;
        this.data.push({name: 'monster', age: 42});
    }

    addItemToImmutableArray() {
        if (!this.data) return;
        this.data = this.data.concat({name: 'regular', age: 20});
    }
}
