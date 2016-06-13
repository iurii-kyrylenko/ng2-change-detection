import { provide} from '@angular/core';
import { describe, expect, it, inject} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import { Observable } from 'rxjs';
import { ParentComponent } from './parent.component';
import { DataService } from './data.service';
import { IItem } from './item';

class MockDataService {
    getData(): Observable<IItem[]> {
        return Observable.of([]);
    }
}

describe('Parent Component', () => {
    it('should update child', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb
            .overrideProviders(ParentComponent,
            [provide(DataService, { useClass: MockDataService })])
            .createAsync(ParentComponent)
            .then(fixture => {
                fixture.detectChanges();
                const compiled = fixture.elementRef.nativeElement;
                const button = compiled.querySelector('#add-m');
                button.click();
                fixture.detectChanges();
                expect(!!compiled.querySelector('td')).toBe(true);
            });
    }));
});
