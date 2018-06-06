import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'levelup-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent {
  currentItem: any;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input()
  set item(value: any) {
    this.currentItem = Object.assign({}, value);
  }
}
