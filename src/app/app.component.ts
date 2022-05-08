import { Subject } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

import { Page } from './@interface/page.interface';
import { ConfigService } from './service/config.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public toggleSideNav$ = new Subject<void>();
    public title: string;
    public pageList: Page[];
    public headerImage: string;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.headerImage = this.configService.headerImage;
        this.pageList = this.configService.pageList;
        this.title = this.configService.appTitle;
    }
}
