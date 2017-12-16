import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EwbTemplateComponent } from '../component/ewbTemplate.component';
import { EwbTemplateService } from '../service/ewbTemplate.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EwbTemplateComponent
  ],
  exports: [
    EwbTemplateComponent
  ],
  providers: [
    EwbTemplateService
  ]
})
export class EwbTemplateModule { }
