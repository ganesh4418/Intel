import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RequestDemoComponent } from './components/request-demo/request-demo.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PlatFormComponent } from './Platform-Page/components/platform/plat-form.component';
import { ResearchComponent } from './Platform-Page/components/research/research.component';
import { HomeComponent } from './components/home/home.component';
import { HelpAndSupportComponent } from './components/help-and-support/help-and-support.component';
import { ConnectUsComponent } from './components/connect-us/connect-us.component';
import { MarketInsightsComponent } from './Platform-Page/components/market-insights/market-insights.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'request-demo', component: RequestDemoComponent, pathMatch: 'full' },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'platform', component: PlatFormComponent, pathMatch: 'full' },
  { path: 'research', component: ResearchComponent, pathMatch: 'full' },
  { path: 'helpSupport', component: HelpAndSupportComponent },
  { path: 'connect-us', component: ConnectUsComponent },
  {path: 'market', component: MarketInsightsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
