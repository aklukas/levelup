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
    { path: '/competitions', icon: 'loyalty', label: 'Books' }
  ];
}
