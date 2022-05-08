import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './@design/header/header.component';
import { ImageLinkComponent } from './@design/image-link/image-link.component';
import { SidenavComponent } from './@design/sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './view/about/about.component';
import { HomeComponent } from './view/home/home.component';
import { IndividualTherapyComponent } from './view/individual-therapy/individual-therapy.component';
import { OnlineTherapyComponent } from './view/online-therapy/online-therapy.component';
import { GroupTherapyComponent } from './view/group-therapy/group-therapy.component';
import { PartnerAndFamiliyTherapyComponent } from './view/partner-and-familiy-therapy/partner-and-familiy-therapy.component';
import { WorkshopsComponent } from './view/workshops/workshops.component';
import { CourseProcessComponent } from './view/course-process/course-process.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HeaderComponent,
        HomeComponent,
        ImageLinkComponent,
        SidenavComponent,
        IndividualTherapyComponent,
        OnlineTherapyComponent,
        GroupTherapyComponent,
        PartnerAndFamiliyTherapyComponent,
        WorkshopsComponent,
        CourseProcessComponent,
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
