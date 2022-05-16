import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { MenuEntry } from '../../@interface/menu-entry.interface';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: [ './nav-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
    @Input() entryList?: MenuEntry[];
    constructor() {
        console.log('sdd');
    }
}
