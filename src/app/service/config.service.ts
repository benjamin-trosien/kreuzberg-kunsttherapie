import { Injectable } from '@angular/core';

import { PagePath } from '../@enum/page-path.enum';
import { Page } from '../@interface/page.interface';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    public readonly pageList: Page[] = [
        {
            path: PagePath.INDIVIDUAL,
            title: 'Individuelle Kunsttherapie',
            image: 'assets/individual-therapy.jpeg',
        },
        {
            path: PagePath.ONLINE,
            title: 'Online Kunsttherapie',
            image: 'assets/online-therapy.jpeg',
        },
        {
            path: PagePath.GROUP,
            title: 'Gruppentherapie',
            image: 'assets/group-therapy.jpeg',
        },
        {
            path: PagePath.PARTNER_AND_FAMILY,
            title: 'Paar- und Familientherapie',
            image: 'assets/partner-and-family-therapy.jpeg',
        },
        {
            path: PagePath.WORKSHOPS,
            title: 'Workshops',
            image: 'assets/workshops.jpeg',
        },
        {
            path: PagePath.COURSE_PROCESS,
            title: 'Verlauf der Therapie',
            image: 'assets/course-process.jpeg',
        },
    ];

    public readonly appTitle = 'Kreuzberg-Kunsttherapie';
    public readonly headerImage = '/assets/header.jpeg';
}
