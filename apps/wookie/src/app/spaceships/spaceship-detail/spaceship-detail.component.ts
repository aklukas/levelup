import { Component, Input } from '@angular/core';
import { Spaceship } from '../../shared/spaceship';

@Component({
  selector: 'levelup-spaceship-detail',
  templateUrl: './spaceship-detail.component.html',
  styleUrls: ['./spaceship-detail.component.css']
})
export class SpaceshipDetailComponent {
  selectedSpaceship: Spaceship;
  @Input()
  set spaceship(value: Spaceship) {
    this.selectedSpaceship = Object.assign({}, value);
  }
}
