import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwbBookingComponent } from './ewbBooking.component';
import {EwbBookingService} from "../service/booking/ewbBooking.service";

describe('TemplateComponent', () => {
  let component: EwbBookingComponent;
  let fixture: ComponentFixture<EwbBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ EwbBookingService ],
      declarations: [ EwbBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwbBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
