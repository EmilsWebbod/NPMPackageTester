import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {EwbBookingService} from "./BookingModule/service/booking/ewbBooking.service";
import {EwbBookingComponent} from "./BookingModule/component/ewbBooking.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        EwbBookingService
      ],
      declarations: [
        AppComponent,
        EwbBookingComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
