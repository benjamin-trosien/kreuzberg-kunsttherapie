import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { TestComponent } from './test/test.component';
import { AboutComponent } from './view/about/about.component';
import { AppointmentComponent } from './view/appointment/appointment.component';
import { ContactComponent } from './view/contact/contact.component';
import { CourseComponent } from './view/course/course.component';
import { CurrentComponent } from './view/current/current.component';
import { TherapyComponent } from './view/therapy/therapy.component';

const routes: Routes = [
    {
        path: 'current',
        component: CurrentComponent,
    },
    {
        path: 'therapy',
        component: TherapyComponent,
    },
    {
        path: 'course',
        component: CourseComponent,
    },
    {
        path: 'appointment',
        component: AppointmentComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: '**',
        component: TestComponent,
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
