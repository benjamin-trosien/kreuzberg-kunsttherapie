import {
    filter,
    map,
} from 'rxjs/operators';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import {
    NavigationEnd,
    Router,
} from '@angular/router';

import { PagePath } from './@enum/page-path.enum';
import { Page } from './@interface/page.interface';
import { ConfigService } from './service/config.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public title: string;
    public pageList: Page[];
    public headerImage: string;
    public PagePath = PagePath;

    public readonly isStartPage$ = this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => (event as NavigationEnd).urlAfterRedirects === '/'),
    );

    constructor(
        private readonly configService: ConfigService,
        private readonly router: Router,
    ) {
        this.headerImage = this.configService.headerImage;
        this.pageList = this.configService.pageList;
        this.title = this.configService.appTitle;
    }
}
