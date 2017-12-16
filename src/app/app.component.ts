import { Component } from '@angular/core';
import {EwbBookingInputService} from "./BookingModule/service/input/ewb-booking-input.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public bookingInputService: EwbBookingInputService) {
    this.bookingInputService.duration.$.subscribe(x => console.log(x))
  }
}
