import { Component } from '@angular/core';
import { SubNavComponent } from '../misc/sub-nav/sub-nav.component';
import { FunctionCardComponent } from './function-card/function-card.component';
import { SearchBarComponent } from '../misc/search-bar/search-bar.component';

@Component({
  selector: 'app-functions',
  standalone: true,
  imports: [SubNavComponent, FunctionCardComponent, SearchBarComponent],
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.scss'
})
export class FunctionsComponent {

}
