import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../shared/competitions.service';

@Component({
  selector: 'levelup-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions: any;
  match: any;
  constructor(private competitionsService: CompetitionsService) {}

  ngOnInit() {
    this.getCompetition();
  }

  getCompetition() {
    this.competitionsService.getCompetitions().subscribe(data => this.competitions = data)
  }

  selectedCompetition(match: any){
    this.competitionsService.getTeams(match._links.teams.href).subscribe(data => this.match = data);
  }

}
