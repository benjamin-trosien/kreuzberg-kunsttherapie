import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

import { Page } from '../../@interface/page.interface';
import { ConfigService } from '../../service/config.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    public readonly pageList: Page[];

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.pageList = this.configService.pageList.filter(page => !!page.image);
    }
}
