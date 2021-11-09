import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { HeroService } from './model';
import { UserService } from './model';
import { TwainComponent } from './twain/twain.component';
import { TwainService } from './twain/twain.service';
import { WelcomeComponent } from './welcome/welcome.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import {CommonModule} from '@angular/common';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CommonModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroService,
    TwainService,
    UserService,

  ],
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    TwainComponent,
    WelcomeComponent,
  ],
  bootstrap: [ AppComponent,
]})
export class AppModule { }
