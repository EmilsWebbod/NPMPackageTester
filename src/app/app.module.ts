import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EwbTemplateModule } from 'npmtemplate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EwbTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
