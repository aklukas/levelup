import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../shared/planets.service';
import { Planet } from '../shared/planet';

@Component({
  selector: 'levelup-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  planet: Planet;

  constructor( private planetsService: PlanetsService ) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.planetsService.getAllPlanets().subscribe(data => this.planets = data)
  }

  selectedPlanet(planet: Planet){
    this.planet = planet;
    console.log('SELECTED')
  }

}
