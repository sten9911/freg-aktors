import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'functions', component: FunctionsComponent},
    {path: 'details', component: DetailsComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'}
];
