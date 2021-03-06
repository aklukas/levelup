import { Component } from '@angular/core';

@Component({
  selector: 'levelup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google Books API';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/planets', icon: 'loyalty', label: 'Planets' },
    { path: '/spaceships', icon: 'loyalty', label: 'Spaceships' },
  ];
}
