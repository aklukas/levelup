import { Component } from '@angular/core';

@Component({
  selector: 'levelup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'levelup';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/planets', icon: 'loyalty', label: 'Planets' },
  ];
}
