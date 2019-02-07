import { Component } from '@angular/core';

@Component({
  selector: 'levelup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'levelup';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/<somepath>', icon: 'loyalty', label: '<somelabel>' },
  ];
}
