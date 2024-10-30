import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [NgClass, NgFor, CommonModule, RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})

export class BreadcrumbsComponent implements OnInit {
  path: string[] = [];
  pathTitle: string[] = [''];

  constructor(private route: ActivatedRoute, private functionService: FunctionsService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.path = url.map(segment => segment.path);
      this.path.unshift('home');
      this.pathTitle = [];
      
      if (this.path.includes('functions')) {
        this.pathTitle.push('Avaleht');
        this.pathTitle.push('Funktsioonide kataloog');
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.functionService.getFunctionById(parseInt(id, 10)).subscribe((response) => {
            if(response) {
              this.pathTitle.push(response.title);
            }
          });
        }
      }
    });
  }
}