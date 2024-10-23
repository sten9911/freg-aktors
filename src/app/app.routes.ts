import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'functions/details', component: DetailsComponent},
    {path: 'functions', component: FunctionsComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'}
];
