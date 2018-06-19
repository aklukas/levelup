import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Spaceship } from '../../shared/spaceship';

@Component({
  selector: 'levelup-spaceship-list',
  templateUrl: './spaceship-list.component.html',
  styleUrls: ['./spaceship-list.component.css']
})
export class SpaceshipListComponent {
  @Input() spaceships: Spaceship[];
  @Output() selected = new EventEmitter();
}
