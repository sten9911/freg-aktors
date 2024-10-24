import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input() iconColor: string = 'blue';

  onSearchClick() {
    console.log('search');
  }
}
