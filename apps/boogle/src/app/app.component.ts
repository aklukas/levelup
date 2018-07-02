import { Component } from '@angular/core';

@Component({
  selector: 'levelup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google Books API';
  links = [
    { path: '/competitions', icon: 'loyalty', label: 'Books' }
  ];
}
