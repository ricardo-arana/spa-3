import { Routes } from "@angular/router";
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';


export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'galeria', component: GaleriaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]