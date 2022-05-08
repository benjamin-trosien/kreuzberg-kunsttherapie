import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    isDesktop$ = this.breakpointObserver.isMatched('(max-width: 599px)');

    constructor(
        private readonly breakpointObserver: BreakpointObserver,
    ) {
    }
}
