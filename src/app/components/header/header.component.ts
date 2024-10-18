import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchBarComponent } from '../misc/search-bar/search-bar.component';
import { ToggleButtonComponent } from '../misc/toggle-button/toggle-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ToggleButtonComponent, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  darkmodeValue: boolean = false;
}
