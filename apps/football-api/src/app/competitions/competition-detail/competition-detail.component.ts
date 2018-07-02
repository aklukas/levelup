import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'levelup-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {
  selectedMatch: any;
  @Input() set match(value: any){
    this.selectedMatch = Object.assign({}, value)
  }
  ngOnInit(){
  }
}
