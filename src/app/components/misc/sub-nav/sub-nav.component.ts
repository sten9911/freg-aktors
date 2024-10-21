import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sub-nav.component.html',
  styleUrl: './sub-nav.component.scss'
})
export class SubNavComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.currentUrl = this.router.url
  }
}
