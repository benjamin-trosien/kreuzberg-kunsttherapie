import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { HomeComponent } from './view/home/home.component';

export enum Path {
    HOME = '',
}

const routes: Routes = [
    {
        path: Path.HOME,
        component: HomeComponent,
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
