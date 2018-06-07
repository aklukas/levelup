import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/post';

@Component({
  selector: 'levelup-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css']
})
export class FeatureDetailComponent {
  currentPost: Post;
  @Input()
  set post(value: Post) {
    this.currentPost = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();
}
