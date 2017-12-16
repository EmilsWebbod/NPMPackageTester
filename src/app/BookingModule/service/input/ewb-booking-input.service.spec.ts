import { TestBed, inject } from '@angular/core/testing';

import { EwbBookingInputService } from './ewb-booking-input.service';

describe('EwbBookingInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EwbBookingInputService]
    });
  });

  it('should be created', inject([EwbBookingInputService], (service: EwbBookingInputService) => {
    expect(service).toBeTruthy();
  }));
});
