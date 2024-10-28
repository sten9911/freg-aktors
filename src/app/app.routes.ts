import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      data: { breadcrumb: 'Avaleht' }
    },
    {
      path: 'functions',
      component: FunctionsComponent,
      data: { breadcrumb: 'Funktsioonide kataloog' }
    },
    {
      path: 'functions/details',
      component: DetailsComponent,
      data: { breadcrumb: 'Funktsiooni detailvaade' }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
