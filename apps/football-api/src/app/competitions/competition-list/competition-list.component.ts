import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'levelup-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent {
  @Input() competitions: any;
  @Output() selected = new EventEmitter();
}
