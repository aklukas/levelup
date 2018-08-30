import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

const URL = 'https://api.football-data.org/v2/competitions/';
const headers = new HttpHeaders({
  'X-Auth-Token': '5fadce0460944560956bbda4c4475b36'
});

@Injectable()
export class CompetitionsService {
  constructor(private http: HttpClient) {}

  getCompetitions() {
    return this.http.get<any>(URL, {headers}).pipe(
    map(res => res),
  );
  }

  getTeams(teamUrl) {
    return this.http.get<any>(teamUrl, {headers})
  }
}
