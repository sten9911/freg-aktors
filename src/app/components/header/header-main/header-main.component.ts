import { Component } from '@angular/core';
import { SearchBarComponent } from '../../misc/search-bar/search-bar.component';
import { NgIf } from '@angular/common';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [SearchBarComponent, NgIf, HeaderMenuComponent],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.scss'
})
export class HeaderMainComponent {
  loggedIn: boolean = false;
  menuOpen: boolean = false;

  login() {
    this.loggedIn = true;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
