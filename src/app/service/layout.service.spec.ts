import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
    let cut: LayoutService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        cut = TestBed.inject(LayoutService);
    });

    it('should be created', () => {

        expect(cut).toBeTruthy();
    });
});
