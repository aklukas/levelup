import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL = 'https://www.googleapis.com/competitions/v1';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  // getAllBooks() {
  //   return this.http.get<any>(URL).pipe(map(res => res.items))
  // }

  searchBooks(input) {
    const param = new HttpParams().append('volumes?q', input);
    return this.http.get<any>(`${URL}/${param}`).pipe(map(res => res.items));
  }

}
