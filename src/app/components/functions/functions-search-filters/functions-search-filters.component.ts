import { Component } from '@angular/core';
import { SearchBarComponent } from '../../misc/search-bar/search-bar.component';
import { DropdownComponent } from '../../misc/dropdown/dropdown.component';

@Component({
  selector: 'app-functions-search-filters',
  standalone: true,
  imports: [SearchBarComponent, DropdownComponent],
  templateUrl: './functions-search-filters.component.html',
  styleUrl: './functions-search-filters.component.scss'
})
export class FunctionsSearchFiltersComponent {

}
