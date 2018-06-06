import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'levelup-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() items = {};
  @Output() select = new EventEmitter();
  @Output() remove = new EventEmitter();
}
