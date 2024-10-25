import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() vertical: boolean = false;
  @Input() headers: {name: string, sortable: boolean, alwaysSortable: boolean}[] = [{name: 'x', sortable: true, alwaysSortable: true}, {name: 'y', sortable: true, alwaysSortable: false}, {name: 'z', sortable: true, alwaysSortable: false}];
  @Input() data: any[][] = [['x', 'y', 'z'], ['x', 'y', 'z'], ['x', 'y', 'z']];

}

