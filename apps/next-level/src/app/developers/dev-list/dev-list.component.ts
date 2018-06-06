import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Developer } from '../../shared/developer';

@Component({
  selector: 'levelup-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent {
  @Input() developers: Developer[];
  @Output() selected = new EventEmitter();
  @Output() remove = new EventEmitter();
}
