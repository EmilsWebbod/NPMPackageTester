import { Injectable } from '@angular/core';
import {Behavior} from "../../shared/behavior";

export type T_DURATION = 'day' | 'week' | 'month';

@Injectable()
export class EwbBookingInputService {

  public duration_options: Array<T_DURATION> = ['day', 'week', 'month'];
  public duration = Behavior.of<T_DURATION>('day');

  constructor() {}
}
