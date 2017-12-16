import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EwbBookingComponent} from './component/ewbBooking.component';
import {EwbBookingInputModule} from "./ewb-booking-input/ewb-booking-input.module";
import {EwbServiceModule} from "./service/ewb-service.module";

@NgModule({
  imports: [
    CommonModule,
    EwbBookingInputModule,
    EwbServiceModule.forRoot()
  ],
  declarations: [
    EwbBookingComponent
  ],
  exports: [
    EwbServiceModule,
    EwbBookingComponent,
    EwbBookingInputModule
  ]
})
export class EwbBookingModule { }
