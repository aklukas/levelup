import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Planet } from '../../shared/planet';

@Component({
  selector: 'levelup-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent {
    @Input() planets: Planet[];
    @Output() selected = new EventEmitter();

}
