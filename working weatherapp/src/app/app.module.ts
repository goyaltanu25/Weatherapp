import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
