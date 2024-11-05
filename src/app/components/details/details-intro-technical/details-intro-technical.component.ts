import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FunctionDetails } from '../../functions/function.model';
import { TableComponent } from '../../misc/table/table.component';

@Component({
  selector: 'app-details-intro-technical',
  standalone: true,
  imports: [NgClass, NgIf, TableComponent, NgFor],
  templateUrl: './details-intro-technical.component.html',
  styleUrl: './details-intro-technical.component.scss'
})
export class DetailsIntroTechnicalComponent {
  @Input() longDescription: FunctionDetails["longDescription"] | undefined;
  @Input() technicalData: any[][] | undefined;
  // Controls which tab is open
  selectedTab: 'desc' | 'tech' = 'desc';


  technicalDataHeaders = [
    [
      { name: 'Kategooria', 'sortable': false, 'alwaysSortable': false},
      { name: 'Pakutav teenus', 'sortable': false, 'alwaysSortable': false },
      { name: 'Tehnoloogia', 'sortable': false, 'alwaysSortable': false },
      { name: 'Programmeerimiskeel', 'sortable': false, 'alwaysSortable': false },
      { name: 'Operatsioonisüsteem', 'sortable': false, 'alwaysSortable': false },
    ],
    [
      { name: 'Rakendatud turvastandardid', 'sortable': false, 'alwaysSortable': false},
      { name: 'ISKE turvaosaklassid', 'sortable': false, 'alwaysSortable': false },
      { name: 'Käideldavuse tase', 'sortable': false, 'alwaysSortable': false },
      { name: 'Tervikluse tase', 'sortable': false, 'alwaysSortable': false },
      { name: 'Konfidentsiaalsuse tase', 'sortable': false, 'alwaysSortable': false },
      { name: 'Viimase auditi kuupäev', 'sortable': false, 'alwaysSortable': false },
    ]
    
  ];
}
