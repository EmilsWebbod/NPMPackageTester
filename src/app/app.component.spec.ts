import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EwbTemplateComponent, EwbTemplateService } from 'npmtemplate';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        EwbTemplateService
      ],
      declarations: [
        AppComponent,
        EwbTemplateComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
