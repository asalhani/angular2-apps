import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataGridComponent } from "app/components/data-grid/data-grid.component";

const routes: Routes = [
    { path: 'grid', component: DataGridComponent },
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    // {
    //     path: '**',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent];