import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EwbBookingModule} from "./BookingModule/EwbBookingModule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EwbBookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
