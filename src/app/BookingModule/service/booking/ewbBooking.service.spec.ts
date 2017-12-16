import { TestBed, inject } from '@angular/core/testing';


import { EwbBookingService } from './ewbBooking.service';

describe('TemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EwbBookingService]
    });
  });

  it('should be created', inject([EwbBookingService], (service: EwbBookingService) => {
    expect(service).toBeTruthy();
  }));

  it('should get 42 from getAnswer()', inject([EwbBookingService], (service: EwbBookingService) => {
    expect(service.getAnswer()).toEqual(42);
  }));
});
