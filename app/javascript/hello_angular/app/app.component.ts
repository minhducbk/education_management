import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 id="main-content-header">{{title}}</h1>
  <nav>
    <a routerLink="/users">Users</a>
    <a routerLink="/users/new">New User</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Education Management!';
}
