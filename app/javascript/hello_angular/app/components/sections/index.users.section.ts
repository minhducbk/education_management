import { Component } from '@angular/core';
import { EditUserButton } from '../buttons/edit.user.btn';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-index-section',
  template: `<h1>Users#index ANGULAR</h1>
  <ul>
    <tr *ngFor="let user of users">
      <td>{{user.email}} <edit-user-btn id="{{user.id}}"></edit-user-btn></td>
    </tr>
  </ul>
  <p>Find me in app/views/users/index.html.erb</p>
  `
})
export class UserIndexSection {
  users;

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/users.json')
      .subscribe(res => this.users = res);
  }
}
