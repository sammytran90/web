import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';

import { DepositPageComponent } from './deposit-page/deposit-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'deposit', component: DepositPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DepositPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
