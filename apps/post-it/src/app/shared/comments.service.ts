import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment';
import { map } from 'rxjs/operators';

const api = 'https://levelup-json.herokuapp.com/posts';

@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) {}

  getAllComments() {
    return this.http
      .get<Comment[]>(api)
      .pipe(map(res => res.map(com => com.comments)));
  }

  create(comment: Comment) {
    return this.http
      .post<Comment>(`${api}`, comment)
      .pipe(map(res => res.map(com => com.comments)));
  }
}
