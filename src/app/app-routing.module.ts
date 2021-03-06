import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { PagePath } from './@enum/page-path.enum';
import { AboutArtTherapyComponent } from './view/about-art-therapy/about-art-therapy.component';
import { AboutMeComponent } from './view/about-me/about-me.component';
import { AppointmentComponent } from './view/appointment/appointment.component';
import { CourseProcessComponent } from './view/course-process/course-process.component';
import { GroupTherapyComponent } from './view/group-therapy/group-therapy.component';
import { HomeComponent } from './view/home/home.component';
import { IndividualTherapyComponent } from './view/individual-therapy/individual-therapy.component';
import { OnlineTherapyComponent } from './view/online-therapy/online-therapy.component';
import { PartnerAndFamilyTherapyComponent } from './view/partner-and-family-therapy/partner-and-family-therapy.component';
import { WorkshopsComponent } from './view/workshops/workshops.component';

const routes: Routes = [
    {
        path: PagePath.HOME,
        component: HomeComponent,
    },
    {
        path: PagePath.INDIVIDUAL,
        component: IndividualTherapyComponent,
    },
    {
        path: PagePath.ONLINE,
        component: OnlineTherapyComponent,
    },
    {
        path: PagePath.GROUP,
        component: GroupTherapyComponent,
    },
    {
        path: PagePath.PARTNER_AND_FAMILY,
        component: PartnerAndFamilyTherapyComponent,
    },
    {
        path: PagePath.WORKSHOPS,
        component: WorkshopsComponent,
    },
    {
        path: PagePath.COURSE_PROCESS,
        component: CourseProcessComponent,
    },
    {
        path: PagePath.APPOINTMENT,
        component: AppointmentComponent,
    },
    {
        path: PagePath.ABOUT_ME,
        component: AboutMeComponent,
    },
    {
        path: PagePath.ABOUT_ART_THERAPY,
        component: AboutArtTherapyComponent,
    },
    {
        path: '',
        redirectTo: PagePath.HOME,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            // scrollOffset: [ 0, 25 ], // cool option, or ideal option when you have a fixed header on top.
        }),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
