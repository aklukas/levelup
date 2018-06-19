import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'levelup-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent  {
 @Input() book: any;
 @Output() searching = new EventEmitter();

}
