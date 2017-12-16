import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {EwbBookingInputService, T_DURATION} from "../../service/input/ewb-booking-input.service";

@Component({
  selector: 'ewb-booking-input-duration',
  templateUrl: './ewb-booking-input-duration.component.html',
  styleUrls: ['./ewb-booking-input-duration.component.css']
})
export class EwbBookingInputDurationComponent implements OnInit {

  @HostBinding('attr.name') @Input() name = '';
  @Output() onChange = new EventEmitter();

  constructor(public bookingInput: EwbBookingInputService) {}

  ngOnInit() {}

  durationChange(value: T_DURATION) {
    this.bookingInput.duration.set(value)
  }
}
