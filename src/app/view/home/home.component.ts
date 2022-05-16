import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

import { PagePath } from '../../@enum/page-path.enum';
import { ImageLink } from '../../@interface/page.interface';
import { ConfigService } from '../../service/config.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    public readonly linkList: ImageLink[];
    public readonly PagePath = PagePath;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.linkList = this.configService.pageList;
    }
}
