import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {EwbTemplateService} from "./src/service/ewbTemplate.service";
import {EwbTemplateComponent} from "./src/component/ewbTemplate.component";

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
