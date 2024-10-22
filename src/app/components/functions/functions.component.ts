import { Component } from '@angular/core';
import { SubNavComponent } from '../misc/sub-nav/sub-nav.component';
import { FunctionCardComponent } from './function-card/function-card.component';
import { SearchBarComponent } from '../misc/search-bar/search-bar.component';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { AsyncPipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Function, FunctionsList } from './function.model';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-functions',
  standalone: true,
  imports: [SubNavComponent, FunctionCardComponent, SearchBarComponent, NgxPaginationModule, NgFor, CommonModule],
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.scss'
})
export class FunctionsComponent {
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
    console.log(this.functions);
  }

  getFunctions(): Observable<Function[]> {
    return this.http.get<FunctionsList>('../../../assets/functions.json').pipe(
      map((item) => item.functions as unknown as Function[])
    );
  }
}
