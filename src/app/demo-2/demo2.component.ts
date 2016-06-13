import { provide, Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService } from './data.service';

@Component({
    template: `
        <h3>Demo-2: Customization of Change Detection</h3>
        <div>{{ds.data.counter}}</div>
    `,
    providers: [
        provide(DataService, {
            useFactory: () => new DataService(20)
        })
    ],
    changeDetection: ChangeDetectionStrategy.Default
})
export class Demo2Component implements OnInit, OnDestroy {

    timer: any;

    constructor(
        private ds: DataService,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.timer = setInterval(() => {
        }, 1000);
    }

    ngOnDestroy() {
        this.ds.stop();
        clearInterval(this.timer);
    }
}
