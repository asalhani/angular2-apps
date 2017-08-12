import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routingComponents } from './app-route'

import { AppComponent } from './app.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { OrgnizationServices } from "app/org.service";
import { RatingModule, SpinnerModule } from "primeng/primeng";


@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule, SpinnerModule
  ],
  providers: [OrgnizationServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
