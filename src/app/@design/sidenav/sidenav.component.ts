import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Page } from '../../@interface/page.interface';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: [ './sidenav.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit, OnDestroy {
    @ViewChild(MatSidenav, { static: true }) matSideNav!: MatSidenav;

    @Input() public pageList!: Page[];
    @Input() public toggle$!: Subject<void>;

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly changeDetector: ChangeDetectorRef,
    ) {}

    public ngOnInit(): void {
        this.toggle$?.pipe(
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.matSideNav.toggle();
            this.changeDetector.detectChanges();
        });
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
