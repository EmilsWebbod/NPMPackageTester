import { Component, OnInit } from '@angular/core';
import { EwbTemplateService } from '../service/ewbTemplate.service';

@Component({
  selector:    'ewb-template',
  templateUrl: './ewbTemplate.component.html',
  styleUrls:   ['./ewbTemplate.component.css']
})
export class EwbTemplateComponent implements OnInit {

  constructor(public templateService: EwbTemplateService) { }

  ngOnInit() {
  }

}
