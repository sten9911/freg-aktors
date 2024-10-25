import { Component } from '@angular/core';
import { SubNavComponent } from '../misc/sub-nav/sub-nav.component';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { TableComponent } from '../misc/table/table.component';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [SubNavComponent, NgIf, NgFor, NgClass, TableComponent, NgxPaginationModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  public config: PaginationInstance = {
    id: "custom",
    itemsPerPage: 2,
    currentPage: 1
  };  

  usecaseHeaders = [
    {'name': "", 'sortable': false, 'alwaysSortable': false}, 
    {'name': "Nimetus", 'sortable': true, 'alwaysSortable': true}, 
    {'name': "Projekti nimetus", 'sortable': true, 'alwaysSortable': false},
    {'name': "Kasutusele võetud", 'sortable': true, 'alwaysSortable': false},
    {'name': "Kasutab", 'sortable': true, 'alwaysSortable': false},
  ];
  usecaseData= [
    ['img:.././assets/users-table-pic.svg', 'IN-ADS aadressiandmed ehitusregistris', 'Ehitusregister', '05.09.2022', 'MKM'], 
    ['img:.././assets/users-table-pic.svg', '	Lorem ipsum dolor sit amet consectetur ipsum dolor sit ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor', '23.09.2021', 'RIA']
  ]

  likes: number = 0;
  liked: boolean = false;

  // Controls which tab is open
  selectedTab: 'desc' | 'tech' = 'desc';

  like()  {
    
    this.liked = !this.liked;
  }

}
