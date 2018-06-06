import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Developer } from '../../shared/developer';

@Component({
  selector: 'levelup-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.css']
})
export class DevDetailComponent {
  selectedDeveloper: Developer;
  @Input() set developer(value: Developer){
    this.selectedDeveloper = Object.assign({}, value)
  }
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();
}
