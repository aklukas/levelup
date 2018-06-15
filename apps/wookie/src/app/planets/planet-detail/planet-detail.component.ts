import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from '../../shared/planet';

@Component({
  selector: 'levelup-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent  {
selectedPlanet: Planet;
  @Input() set planet(value: Planet){
    this.selectedPlanet = Object.assign({}, value)
  }
}
