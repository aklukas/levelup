import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from '../shared/spaceship.service';
import { Spaceship } from '../shared/spaceship';

@Component({
  selector: 'levelup-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.css']
})
export class SpaceshipsComponent implements OnInit {
  spaceships: Spaceship[];
  spaceship: Spaceship;

  constructor(private spaceshipService: SpaceshipService) {}

  ngOnInit() {
    this.getSpaceship();
  }

  getSpaceship() {
    this.spaceshipService
      .getAllSpaceships()
      .subscribe(data => (this.spaceships = data));
  }

  selectedSpaceship(spaceship: Spaceship) {
    this.spaceship = spaceship;
    console.log('SELECTED');
  }
}
