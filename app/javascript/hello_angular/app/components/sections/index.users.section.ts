import { Component } from '@angular/core';
import { DeleteUserButton } from '../buttons/delete.user.btn';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-index-section',
  template: `
  <h1>Users#index ANGULAR</h1>
  <ul>
    <tr *ngFor="let user of users">
      <td>
        <p> {{user.email}} </p>  
        <a routerLink="/users/{{user.id}}/edit">
          <span class="btn btn-default">Edit</span> 
        </a>
        <delete-user-btn userid="1111">{{user.id}}</delete-user-btn>
      </td>
    </tr>
  </ul>

  `
})
export class IndexUserSection {
  users;

  constructor(private http: HttpClient) {
    http.get('users.json')
      .subscribe(res => this.users = res);
  }
}
