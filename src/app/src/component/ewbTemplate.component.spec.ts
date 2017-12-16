import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwbTemplateComponent } from './ewbTemplate.component';
import {EwbTemplateService} from '../service/ewbTemplate.service';

describe('TemplateComponent', () => {
  let component: EwbTemplateComponent;
  let fixture: ComponentFixture<EwbTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ EwbTemplateService ],
      declarations: [ EwbTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwbTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
