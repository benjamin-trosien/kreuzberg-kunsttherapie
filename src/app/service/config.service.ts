import { Injectable } from '@angular/core';

import { PagePath } from '../@enum/page-path.enum';
import { MenuEntry } from '../@interface/menu-entry.interface';
import { ImageLink } from '../@interface/page.interface';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    public readonly menuList: MenuEntry[] = [
        {
            target: PagePath.HOME,
            label: 'Start',
        },
        {
            target: PagePath.ABOUT_ME,
            label: 'Über mich',
        },
        {
            target: PagePath.ABOUT_ART_THERAPY,
            label: 'Was ist Kunsttherapie',
        },
        {
            target: PagePath.INDIVIDUAL,
            label: 'Individuelle Kunsttherapie',
        },
        {
            target: PagePath.ONLINE,
            label: 'Online Kunsttherapie',
        },
        {
            target: PagePath.GROUP,
            label: 'Gruppentherapie',
        },
        {
            target: PagePath.PARTNER_AND_FAMILY,
            label: 'Paar- und Familientherapie',
        },
        {
            target: PagePath.WORKSHOPS,
            label: 'Workshops',
        },
        {
            target: PagePath.COURSE_PROCESS,
            label: 'Verlauf einer Sitzung',
        },
        {
            target: PagePath.APPOINTMENT,
            label: 'Termin  buchen',
        },
    ];

    public readonly pageList: ImageLink[] = [
        {
            target: PagePath.INDIVIDUAL,
            label: 'Individuelle Kunsttherapie',
            image: 'assets/art-hobby.jpeg',
        },
        {
            target: PagePath.ONLINE,
            label: 'Online Kunsttherapie',
            image: 'assets/closeup-of-hand-working-with-spatula-with-acrylic.jpeg',
        },
        {
            target: PagePath.GROUP,
            label: 'Gruppentherapie',
            image: 'assets/faculty-of-arts.jpeg',
        },
        {
            target: PagePath.PARTNER_AND_FAMILY,
            label: 'Paar- und Familientherapie',
            image: 'assets/aerial-view-of-hand-working-with-spatula-with-acrylic.jpeg',
        },
        {
            target: PagePath.WORKSHOPS,
            label: 'Workshops',
            image: 'assets/workshops.jpeg',
        },
        {
            target: PagePath.COURSE_PROCESS,
            label: 'Verlauf der Therapie',
            image: 'assets/sculptures-of-buddha-and-yoga-mats-on-wooden-shelf.jpeg',
        },
    ];

    public readonly appTitle = 'Kreuzberg-Kunsttherapie';
    public readonly headerImage = '/assets/header.jpeg';
}
