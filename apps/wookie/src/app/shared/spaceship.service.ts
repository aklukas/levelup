import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Spaceship } from './spaceship';

const api = 'https://swapi.co/api/starships';
@Injectable()
export class SpaceshipService {
  constructor(private http: HttpClient) {}

  getAllSpaceships() {
    return this.http.get<any>(api).pipe(map(res => res.results));
  }
}
