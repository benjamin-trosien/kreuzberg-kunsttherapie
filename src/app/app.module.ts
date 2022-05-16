import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './@design/footer/footer.component';
import { ImageLinkComponent } from './@design/image-link/image-link.component';
import { NavListComponent } from './@design/nav-list/nav-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './view/about/about.component';
import { AppointmentComponent } from './view/appointment/appointment.component';
import { CourseProcessComponent } from './view/course-process/course-process.component';
import { GroupTherapyComponent } from './view/group-therapy/group-therapy.component';
import { HomeComponent } from './view/home/home.component';
import { IndividualTherapyComponent } from './view/individual-therapy/individual-therapy.component';
import { OnlineTherapyComponent } from './view/online-therapy/online-therapy.component';
import { PartnerAndFamilyTherapyComponent } from './view/partner-and-family-therapy/partner-and-family-therapy.component';
import { WorkshopsComponent } from './view/workshops/workshops.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        AppointmentComponent,
        CourseProcessComponent,
        FooterComponent,
        GroupTherapyComponent,
        HomeComponent,
        ImageLinkComponent,
        IndividualTherapyComponent,
        OnlineTherapyComponent,
        PartnerAndFamilyTherapyComponent,
        WorkshopsComponent,
        NavListComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
