import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../shared/youtube.service';

@Component({
  selector: "levelup-main-dash",
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit{
  items: any[];
  item: any;
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(){
    this.getItems();
  };

  getItems(){
    this.youtubeService.load().subscribe( data => this.items = data);
  }

  selectDetails(snippet) {
    this.item = snippet;
    console.log(this.item);
  }

  save() {
    console.log('SAVED')
  }

  cancel() {
    console.log('CANCELED');
    this.item = {title: '', description: '', pic: ''}
  }

  remove(snippet) {
    console.log('deleted', snippet)
  }
}
