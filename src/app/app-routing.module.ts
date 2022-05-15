import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { PagePath } from './@enum/page-path.enum';
import { CourseProcessComponent } from './view/course-process/course-process.component';
import { GroupTherapyComponent } from './view/group-therapy/group-therapy.component';
import { HomeComponent } from './view/home/home.component';
import { IndividualTherapyComponent } from './view/individual-therapy/individual-therapy.component';
import { OnlineTherapyComponent } from './view/online-therapy/online-therapy.component';
import { PartnerAndFamiliyTherapyComponent } from './view/partner-and-family-therapy/partner-and-familiy-therapy.component';
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
        component: PartnerAndFamiliyTherapyComponent,
    },
    {
        path: PagePath.WORKSHOPS,
        component: WorkshopsComponent,
    },
    {
        path: PagePath.COURSE_PROCESS,
        component: CourseProcessComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
