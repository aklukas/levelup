import { Component, OnInit } from '@angular/core';
import { Comment } from '../../shared/comment';
import { Post } from '../../shared/post';
import { CommentsService } from '../../shared/comments.service';

@Component({
  selector: 'levelup-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: Comment;

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.getComments();
    this.reset();
  }

  getComments() {
    this.commentsService
      .getAllComments()
      .subscribe(data => (this.comment = data));
  }

  postComment(comment: Comment) {
    this.commentsService.create(comment).subscribe(data => data);
    console.log('COMMENT POSTED', comment);
  }

  reset() {
    this.comment = { id: null, responding_user: '', response: '' };
  }
}
