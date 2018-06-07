import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { map } from 'rxjs/operators';

const api = 'https://levelup-json.herokuapp.com/posts';

@Injectable()
export class FeatureService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<Post[]>(api).pipe(map(res => res));
  }

  create(post: Post) {
    return this.http.post<Post>(`${api}`, post).pipe(map(res => res));
  }

  update(post: Post) {
    return this.http
      .patch<Post>(`${api}/${post.id}`, post)
      .pipe(map(res => res));
  }

  remove(id: number) {
    return this.http.delete<Post>(`${api}/${id}`).pipe(map(res => res));
  }
}
