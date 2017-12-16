import { Component, OnInit } from '@angular/core';
import {EwbBookingService} from "../service/booking/ewbBooking.service";

@Component({
  selector:    'ewb-booking',
  templateUrl: './ewbBooking.component.html',
  styleUrls:   ['./ewbBooking.component.css']
})
export class EwbBookingComponent implements OnInit {

  constructor(public bookingService: EwbBookingService) { }

  ngOnInit() {
  }

}
