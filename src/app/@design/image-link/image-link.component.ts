import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { ImageLink } from '../../@interface/page.interface';

@Component({
    selector: 'app-image-link',
    templateUrl: './image-link.component.html',
    styleUrls: [ './image-link.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageLinkComponent {
    @Input() public imageLink!: ImageLink;
}
