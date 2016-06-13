import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
            <tr *ngFor="let item of data" (mousemove)="mouseMove()">
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
            </tr>
        </table>
    `,

    changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent {

    @Input() tag: string;

    @Input() data: IItem[];

    mouseMove() {
        console.log(`mouse moving (${this.tag})`);
    }
}
