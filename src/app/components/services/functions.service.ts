import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FunctionsList, Function } from '../functions/function.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  private apiUrl = 'assets/functions.json';

  constructor(private http: HttpClient) { }

  getFunctionById(id: number): Observable<Function | undefined> {
    return this.http.get<FunctionsList>(this.apiUrl).pipe(
      map((item: FunctionsList) => item.functions.find((functionData: Function) => functionData.id === id))
    );
  }

  getFunctions(): Observable<Function[]> {
    return this.http.get<FunctionsList>(this.apiUrl).pipe(
      map((item) => item.functions as unknown as Function[])
    );
  }
}
