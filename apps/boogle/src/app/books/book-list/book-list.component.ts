import { Component, Input } from '@angular/core';

@Component({
  selector: 'levelup-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent  {
  @Input() book: any;

}
