import { Component } from '@angular/core';
import { FunctionCardComponent } from '../function-card/function-card.component';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FunctionsList, Function } from '../function.model';

@Component({
  selector: 'app-functions-list',
  standalone: true,
  imports: [FunctionCardComponent, NgxPaginationModule, NgFor, NgIf],
  templateUrl: './functions-list.component.html',
  styleUrl: './functions-list.component.scss'
})
export class FunctionsListComponent {
  p = 1;

  functions: Function[] = [];

  public config: PaginationInstance = {
    id: "custom",
    itemsPerPage: 5,
    currentPage: 1
  };  

  constructor(private http: HttpClient) {
    this.getFunctions().subscribe((data) => {
      data.forEach((item) => this.functions.push(item))
    });
  }

  getFunctions(): Observable<Function[]> {
    return this.http.get<FunctionsList>('../../../../assets/functions.json').pipe(
      map((item) => item.functions as unknown as Function[])
    );
  }
}
