import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

import { PagePath } from '../../@enum/page-path.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @ViewChild('menuButton', { static: true }) menuButton!: HTMLButtonElement;

    @Input() headerImage?: string;
    @Input() title?: string;

    @Output() menuClicked = new EventEmitter<void>();

    public PagePath = PagePath;

    public emitMenuClick(): void {
        this.menuClicked.emit();
    }
}
