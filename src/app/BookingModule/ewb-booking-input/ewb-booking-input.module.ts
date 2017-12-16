import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EwbBookingInputDurationComponent } from './ewb-booking-input-duration/ewb-booking-input-duration.component';
import {PipeModule} from "../pipes/pipe.module";
import {EwbServiceModule} from "../service/ewb-service.module";

@NgModule({
  imports: [
    CommonModule,
    EwbServiceModule,
    PipeModule
  ],
  declarations: [
    EwbBookingInputDurationComponent
  ],
  exports: [
    EwbBookingInputDurationComponent
  ]
})
export class EwbBookingInputModule {}
