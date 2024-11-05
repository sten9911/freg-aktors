import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { FunctionsList, Function, FunctionDetails } from '../functions/function.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  private functionsUrl = 'assets/functions.json';
  private detailsUrl = 'assets/functionDetails.json';

  constructor(private http: HttpClient) { }

  getFunctionById(id: number): Observable<{ function: Function; functionDetails: FunctionDetails } | undefined> {
    return forkJoin({
      function: this.http.get<FunctionsList>(this.functionsUrl).pipe(
        map((item: FunctionsList) => item.functions.find((functionData: Function) => functionData.id === id))
      ),
      functionDetails: this.getFunctionDetails()
    }).pipe(
      map((result) => {
        if (result.function && result.functionDetails) {
          return { function: result.function, functionDetails: result.functionDetails };
        } else {
          return undefined;
        }
      })
    );
  }

  getFunctions(): Observable<Function[]> {
    return this.http.get<FunctionsList>(this.functionsUrl).pipe(
      map((item) => item.functions as unknown as Function[])
    );
  }

  getFunctionDetails(): Observable<FunctionDetails> {
    return this.http.get<FunctionDetails>(this.detailsUrl).pipe(
      map((item: FunctionDetails) => {
        return item;
      })
    );
  }
}
