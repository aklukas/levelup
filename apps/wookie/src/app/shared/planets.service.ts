import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Planet } from './planet';

const api = 'https://swapi.co/api/planets';

@Injectable()
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getAllPlanets() {
    return this.http.get<any>(api).pipe(map(res => res.results))
  }
}
