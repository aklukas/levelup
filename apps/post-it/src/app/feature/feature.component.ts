import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../shared/feature.service';
import { Post } from '../shared/post';
import { Comment } from '../shared/comment';

@Component({
  selector: 'levelup-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  posts: Post[];
  post: Post;

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.getPosts();
    this.reset();
  }

  getPosts() {
    this.featureService.getAllPosts().subscribe(data => (this.posts = data));
  }

  selectedPost(post: Post) {
    this.post = post;
    console.log('SELECTED');
  }

  savePost(post: Post) {
    console.log('SAVED');
    post.id ? this.updatePost(post) : this.createPost(post);
  }

  createPost(post: Post) {
    this.featureService.create(post).subscribe(data => {
      this.getPosts();
      this.reset();
    });
    console.log('POST CREATED');
  }

  updatePost(post: Post) {
    this.featureService.update(post).subscribe(data => {
      this.getPosts();
      this.reset();
    });
    console.log('POST UPDATED');
  }

  removePost(id: number) {
    console.log('POST DELETED');
    this.featureService.remove(id).subscribe(data => {
      this.getPosts();
      this.reset();
    });
  }

  reset() {
    this.post = { id: null, username: '', content: '', comments: [] };
  }

  clear() {
    this.reset();
    console.log('CLEARED');
  }
}
