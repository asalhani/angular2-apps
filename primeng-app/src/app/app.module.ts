import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-route'

import { AppComponent } from './app.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
