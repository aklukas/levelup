import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/post';

@Component({
  selector: 'levelup-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent {
  @Input() posts: Post[];
  @Output() selected = new EventEmitter();
  @Output() remove = new EventEmitter();
}
