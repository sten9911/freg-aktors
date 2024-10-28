import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [NgClass, NgFor, CommonModule, RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})

export class BreadcrumbsComponent implements OnInit {
  path: string[] = [];
  pathTitle: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.path = this.router.url.split('/');
    if (this.path[0] === '') this.path[0] = 'home'
    this.pathTitle = this.path.map(path => this.getPathTitle(path));
  }

  getPathTitle(path: string) {
    if (path === 'home') return 'Avaleht';    
    if (path === 'functions') return 'Funktsioonide kataloog';
    if (path === 'details') return 'Funktsiooni detailvaade';
    return '-';
  }
}