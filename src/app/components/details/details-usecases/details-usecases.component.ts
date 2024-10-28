import { Component } from '@angular/core';
import { TableComponent } from '../../misc/table/table.component';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-details-usecases',
  standalone: true,
  imports: [TableComponent, NgxPaginationModule, NgIf, NgFor],
  templateUrl: './details-usecases.component.html',
  styleUrl: './details-usecases.component.scss'
})
export class DetailsUsecasesComponent {
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
}
