import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Developer } from './developer';
import { map } from 'rxjs/operators';

const url = 'https://levelup-json.herokuapp.com/developers';

@Injectable()
export class DevelopersService {

  constructor( private http:HttpClient) { }

  getAllDevs() {
    return this.http.get<Developer[]>(url).pipe(map(res => res))
  }

  create(developer: Developer) {
    return this.http.post<Developer>(`${url}`, developer).pipe(map(res => res))
  }

  update(developer: Developer) {
    return this.http.patch<Developer>(`${url}/${developer.id}`, developer).pipe(map(res => res))
  }

  remove(id: number) {
    return this.http.delete<Developer>(`${url}/${id}`).pipe(map(res => res))
  }

}
