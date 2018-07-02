import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface Post {
  isLit: boolean;
}

@Component({
  selector: 'levelup-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent implements OnInit {
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  isLit: boolean;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

  setValue () {
    this.afs.collection('posts').doc('lightOn').update({'isLit': this.isLit = !this.isLit});
  }
}
