import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './view/about/about.component';
import { AppointmentComponent } from './view/appointment/appointment.component';
import { ContactComponent } from './view/contact/contact.component';
import { CourseComponent } from './view/course/course.component';
import { CurrentComponent } from './view/current/current.component';
import { HomeComponent } from './view/home/home.component';
import { TherapyComponent } from './view/therapy/therapy.component';
import { ParallaxImageComponent } from './@design/parallax-image/parallax-image.component';
import { SidenavComponent } from './@design/sidenav/sidenav.component';

@NgModule({
    declarations: [
        AppComponent,
        CurrentComponent,
        TherapyComponent,
        CourseComponent,
        AppointmentComponent,
        ContactComponent,
        AboutComponent,
        HomeComponent,
        ParallaxImageComponent,
        SidenavComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
