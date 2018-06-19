import { Component } from '@angular/core';

@Component({
  selector: 'levelup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google Books API';
  links = [
    { path: '/books', icon: 'loyalty', label: 'Books' }
  ];
}
