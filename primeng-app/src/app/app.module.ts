import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule, routingComponents } from './app-route'

import { AppComponent } from './app.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { OrgnizationServices } from "app/org.service";
import { RatingModule, SpinnerModule, GrowlModule, DataTableModule, SharedModule, DialogModule }
  from "primeng/primeng";


@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent],
  imports: [
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
  ],
  providers: [OrgnizationServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
