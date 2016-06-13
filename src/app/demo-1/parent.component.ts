import { Component, OnInit, DoCheck, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from './data.service';
import { IItem } from './item';
import { ChildComponent } from './child.component';

@Component({
    selector: 'parent',
    template: `
        <div class="parent">
            <p>
                <button id="add-m" (click)="addItem()">+ m</button>
             </p>
            <child [tag]="tag" [data]="data"></child>
        <div>
    `,
    styles: [`
        .parent {
            display:inline-block;
            width: 120px;
        }
        button {
            background-color: #eee;
            border-radius: 4px;
        }
    `],
    directives: [ChildComponent],
    changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit {

    @Input() tag: string;

    data: IItem[];

    constructor(
        private dataService: DataService,
        private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.dataService.getData().subscribe(data => {
            this.data = data;
        });
    }

    addItem() {
        if (!this.data) return;
        this.data.push({name: 'new', age: 42});
    }
}
