import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../shared/developers.service';
import { Developer } from '../shared/developer';

@Component({
  selector: 'levelup-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  developer: Developer;
  constructor(private developerService: DevelopersService) { }

  ngOnInit() {
    this.getDevs();
    this.reset()
  }

  getDevs() {
    this.developerService.getAllDevs().subscribe(data => this.developers = data)
  }

  selectedDev(developer: Developer) {
    this.developer = developer;
    console.log('selected', this.developer);
  }

  saveDev(developer: Developer) {
    console.log('SAVED');
    developer.id ? this.updateDev(developer) : this.createDev(developer);
  }

  createDev(developer: Developer){
    this.developerService.create(developer).subscribe(data => {
      this.getDevs();
      this.reset();
    })
  }

  updateDev(developer: Developer){
    this.developerService.update(developer).subscribe( data => {
      this.getDevs();
      this.reset();
    })
  }

  removeDev(id: number) {
    this.developerService.remove(id).subscribe(data => {
      this.getDevs();
      this.reset();
    });
    console.log('deleted')
  }

  reset() {
    this.developer = {id: null, name: "", repo: "", projects: []}
  }

  cancel(developer: Developer) {
    this.reset();
  }
}
