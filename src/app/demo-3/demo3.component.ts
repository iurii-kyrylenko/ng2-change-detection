import { Component } from '@angular/core';

@Component({
    template: `
        <h3>Demo-3: Attempt to change expression after checking</h3>
        <h4>!!! Do not neglect dev mode !!!</h4>
        <div>{{getCounter()}}</div>
    `
})
export class Demo3Component {
    counter = 42;

    getCounter() {
        return this.counter++;
    }
}
