import { NgModule } from '@angular/core';
import {EwbBookingService} from "./booking/ewbBooking.service";
import {EwbBookingInputService} from "./input/ewb-booking-input.service";

@NgModule({
  imports: [],
})
export class EwbServiceModule {
  static forRoot() {
    return {
      ngModule: EwbServiceModule,
      providers: [
        EwbBookingService,
        EwbBookingInputService
      ]
    }
  }
}
