import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RequestDemoComponent } from './components/request-demo/request-demo.component';
import { BodyComponent } from './components/body/body.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ResearchComponent } from './Platform-Page/components/research/research.component';
import { PlatFormComponent } from './Platform-Page/components/platform/plat-form.component';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HelpAndSupportComponent } from './components/help-and-support/help-and-support.component';
import { ResponseDialogComponent } from './shared/response-dialog/response-dialog.component';
import { ConnectUsComponent } from './components/connect-us/connect-us.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MarketInsightsComponent } from './Platform-Page/components/market-insights/market-insights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './shared/toeknInterceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { NoSpaceInInputDirective } from './shared/directives/no-space-in-input.directive';
import { MobileappComponent } from './components/mobileapp/mobileapp.component';
import { NewlinePipeService } from './Platform-Page/services/newline-pipe.service';
import { ResearchResponseComponent } from './Platform-Page/components/research-response/research-response.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    RequestDemoComponent,
    BodyComponent,
    ContactUsComponent,
    ResearchComponent,
    PlatFormComponent,
    HelpAndSupportComponent,
    ConnectUsComponent,
    ResponseDialogComponent,
    MarketInsightsComponent,
    LoaderComponent,
    NoSpaceInInputDirective,
    MobileappComponent,
    NewlinePipeService,
    ResearchResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    


  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
