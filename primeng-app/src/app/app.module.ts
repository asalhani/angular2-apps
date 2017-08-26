import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-route'

import { AppComponent } from './app.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    InputValidationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
