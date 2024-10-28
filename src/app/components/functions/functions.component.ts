import { Component } from '@angular/core';
import { FunctionsSearchFiltersComponent } from './functions-search-filters/functions-search-filters.component';
import { FunctionsListComponent } from './functions-list/functions-list.component';
import { BreadcrumbsComponent } from '../misc/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-functions',
  standalone: true,
  imports: [FunctionsSearchFiltersComponent, FunctionsListComponent, BreadcrumbsComponent],
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.scss'
})
export class FunctionsComponent {

}
