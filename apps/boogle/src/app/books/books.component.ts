import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';


@Component({
  selector: 'levelup-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  book: any;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    // this.getBooks();
  }

  // getBooks() {
  //   this.bookService.getAllBooks().subscribe(data => this.books = data.map(item => item.volumeInfo));
  // }

  search(input){
    this.bookService.searchBooks(input).subscribe(data => this.books = data.map(res => res.volumeInfo));
  }

}
