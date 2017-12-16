import {Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ewb-booking-input-duration-option',
  templateUrl: './ewb-booking-input-duration-option.component.html',
  styleUrls: ['./ewb-booking-input-duration-option.component.css']
})
export class EwbBookingInputDurationOptionComponent implements OnInit {

  @ViewChild('contentWrapper') content: ElementRef;

  /** value that should be given to parent selector */
  @HostBinding('attr.value') @Input() value;
  /** Value that is show in ODM. Could be set with inclusion or as input */
  @HostBinding('attr.label') @Input() label;

  constructor() {}

  ngOnInit() {
    let _label = this.content.nativeElement.innerText;
    _label = _label === '' ? null : _label;
    /** Check ng-content or set same label */
    this.label = this.label || (_label || 'No Label');
    this.value = this.value || (_label || 'Not set');
  }
}
