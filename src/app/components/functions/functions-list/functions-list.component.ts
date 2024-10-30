import { Component, OnInit } from '@angular/core';
import { FunctionCardComponent } from '../function-card/function-card.component';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FunctionsList, Function } from '../function.model';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-functions-list',
  standalone: true,
  imports: [FunctionCardComponent, NgxPaginationModule, NgFor, NgIf],
  templateUrl: './functions-list.component.html',
  styleUrl: './functions-list.component.scss'
})
export class FunctionsListComponent implements OnInit {
  p = 1;

  functions: Function[] = [];

  public config: PaginationInstance = {
    id: "custom",
    itemsPerPage: 5,
    currentPage: 1
  };  

  constructor(private functionService: FunctionsService) {
  }

  ngOnInit(): void {
    this.functionService.getFunctions().subscribe((data) => {
      data.forEach((item) => this.functions.push(item))
    });
  }
}
