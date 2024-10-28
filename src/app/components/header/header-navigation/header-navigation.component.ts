import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-navigation.component.html',
  styleUrl: './header-navigation.component.scss'
})
export class HeaderNavigationComponent {

}
