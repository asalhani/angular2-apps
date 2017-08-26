import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataGridComponent } from "./components/data-grid/data-grid.component";
import { InputValidationComponent } from './components/input-validation/input-validation.component';

const routes: Routes = [
    { path: 'grid', component: DataGridComponent },
    { path: 'inputValidation', component: InputValidationComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
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