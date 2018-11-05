import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get (endpoint: string, options = {}): Observable<any> {
    const requestOption = Object.assign({}, options);
    return this.http.get(endpoint, requestOption);
  }
}
