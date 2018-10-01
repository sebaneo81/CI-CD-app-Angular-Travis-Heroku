import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ChartModule.forRoot(require('highcharts')),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
