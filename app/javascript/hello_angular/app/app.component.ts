import { Component }                                                 from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 id="main-content-header">{{title}}</h1>
  <nav>
    <a routerLink="/users" routerLinkActive="active">Users</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Education Management!';
}
//  <a routerLink="/users/new" routerLinkActive="active">New User</a>
