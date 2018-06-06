import { Component } from '@angular/core';

@Component({
  selector: 'levelup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Next Level';

  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/developers', icon: 'loyalty', label: 'Developers'},
  ];

}
