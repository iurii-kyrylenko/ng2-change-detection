import { Component, OnInit, DoCheck, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from './data.service';
import { IItem } from './item';
import { ChildComponent } from './child.component';

@Component({
    selector: 'parent',
    template: `
        <div class="parent">
            <div>{{test()}}</div>
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
            width: 120px;
        }
        button {
            background-color: #eee;
            border-radius: 4px;
        }
    `],
    directives: [ChildComponent],
    changeDetection: ChangeDetectionStrategy.Default
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit, DoCheck {

    test() {
        console.log('CD for parent', this.tag);
        return '';
    }

    @Input() tag: string;

    data: IItem[];

    constructor(
        private dataService: DataService,
        private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.dataService.getData().subscribe(data => {
            this.data = data;
            // console.log(data);
            // this.cd.markForCheck();
        });
    }

    ngDoCheck() {
        console.log(`ngDoCheck for parent ${this.tag}`);
    }

    addItemToMutableArray() {
        if (!this.data) return;
        this.data.push({name: 'mutable', age: 42});
    }

    addItemToImmutableArray() {
        if (!this.data) return;
        this.data = this.data.concat({name: 'immutable', age: 20});
    }
}
