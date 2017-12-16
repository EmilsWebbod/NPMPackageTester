import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, NO_ERRORS_SCHEMA} from "@angular/core";

import { EwbBookingInputDurationComponent } from './ewb-booking-input-duration.component';
import {EwbBookingInputDurationOptionComponent} from "../../component/ewb-booking-input-duration-option/ewb-booking-input-duration-option.component";
import {By} from "@angular/platform-browser";

@Component({
  template: `
<ewb-booking-input-duration>
  <ewb-booking-input-duration-option value="b">b</ewb-booking-input-duration-option>
  <ewb-booking-input-duration-option>a</ewb-booking-input-duration-option>
  <ewb-booking-input-duration-option label="c"></ewb-booking-input-duration-option>
</ewb-booking-input-duration>
  `
}) class TestBookingInputDurationComponent {}

describe('EwbBookingInputDurationComponent', () => {
  let component: EwbBookingInputDurationComponent;
  let children: Array<any>;
  let fixture: ComponentFixture<TestBookingInputDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        TestBookingInputDurationComponent,
        EwbBookingInputDurationComponent,
        EwbBookingInputDurationOptionComponent
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBookingInputDurationComponent);
    component = fixture.debugElement.children[0].componentInstance;
    children = fixture.debugElement.children[0].children;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
