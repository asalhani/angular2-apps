import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule,  } from '@angular/core';
import { FormsModule }   from '@angular/forms';
=======
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
>>>>>>> 7a95abc3754c6a67119158acaa856a8782f4a215
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule, routingComponents } from './app-route'

import { AppComponent } from './app.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
<<<<<<< HEAD
import { InputValidationComponent } from './components/input-validation/input-validation.component';
=======
import { OrgnizationServices } from "app/org.service";
import { RatingModule, SpinnerModule, GrowlModule, DataTableModule, SharedModule, DialogModule }
  from "primeng/primeng";

>>>>>>> 7a95abc3754c6a67119158acaa856a8782f4a215

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    InputValidationComponent],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    AppRoutingModule,
    FormsModule
=======
    BrowserModule
    , BrowserAnimationsModule
    , FormsModule
    , AppRoutingModule
    , HttpModule
    , SpinnerModule
    , GrowlModule
    , DataTableModule
    , SharedModule
    , DialogModule
>>>>>>> 7a95abc3754c6a67119158acaa856a8782f4a215
  ],
  providers: [OrgnizationServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
