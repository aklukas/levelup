import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../shared/comment';
import { Post } from '../../../shared/post';

@Component({
  selector: 'levelup-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {
  newComment: Comment;
  @Input()
  set post(value: Comment) {
    this.newComment = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();
}
