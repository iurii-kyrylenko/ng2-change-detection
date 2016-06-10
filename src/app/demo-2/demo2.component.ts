import { provide, Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
    ]
})
export class Demo2Component implements OnInit, OnDestroy {

    timer: any;

    constructor(
        private ds: DataService,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.cd.detach();
        this.timer = setInterval(() => {
            this.cd.reattach();
            this.cd.detectChanges();
            this.cd.detach();
        }, 1000);
    }

    ngOnDestroy() {
        this.ds.stop();
        clearInterval(this.timer);
    }
}
