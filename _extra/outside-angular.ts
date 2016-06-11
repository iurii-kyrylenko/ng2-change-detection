import { Component, Input, ChangeDetectionStrategy, ApplicationRef, ElementRef } from '@angular/core';
import { IItem } from './item';

@Component({
    selector: 'child',
    template: `
        <div *ngIf="!data">Loading...</div>
        <table class="gridtable">
            <tr *ngIf="data">
                <th>Name</th>
                <th>Age</th>
            </tr>
            <tr *ngFor="let item of data">
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
            </tr>
        </table>
    `,
    changeDetection: ChangeDetectionStrategy.Default
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
    @Input() tag: string;

    private _data: IItem[];

    private _counter = 0;

    @Input() get data() {
        console.log(`getting data (${this.tag}): ${++this._counter}`);
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    constructor(private app: ApplicationRef, private elm: ElementRef) { }

    ngOnInit() {
        // for ChangeDetectionStrategy.Default
        this.app.zone.runOutsideAngular(() => {
            this.elm.nativeElement.addEventListener('mousemove', () => {
                this.mouseMove();
            });
        });

        // for ChangeDetectionStrategy.OnPush
        // this.elm.nativeElement.addEventListener('mousemove', this.mouseMove.bind(this));
    }

    mouseMove() {
        console.log(`mouse moving (${this.tag})`);
    }
}
