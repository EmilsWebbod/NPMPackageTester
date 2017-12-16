import { TestBed, inject } from '@angular/core/testing';


import { EwbTemplateService } from './ewbTemplate.service';
console.log('Test', TestBed, inject, EwbTemplateService)

describe('TemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EwbTemplateService]
    });
  });

  it('should be created', inject([EwbTemplateService], (service: EwbTemplateService) => {
    expect(service).toBeTruthy();
  }));

  it('should get 42 from getAnswer()', inject([EwbTemplateService], (service: EwbTemplateService) => {
    expect(service.getAnswer()).toEqual(42);
  }));
});
