import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
//crete a function that grabs data from url given
  getURL(url: string): Observable<any> {
    return this.http.get(url);
  }
}
