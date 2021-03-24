import { Component } from '@angular/core';
import { DeleteUserButton } from '../buttons/delete.user.btn';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-index-section',
  template: `<h1>Users#index ANGULAR</h1>
  <ul>
    <tr *ngFor="let user of users">
      <td>
        <p> {{user.email}} </p>  
        <a routerLink="/users/{{user.id}}/edit">
          <span class="btn btn-default">Edit</span> 
        </a>
        <p> {{user.id}} </p>
        <delete-user-btn user="user">
        </delete-user-btn>
      </td>
    </tr>
  </ul>

  `
})
export class IndexUserSection {
  user;
  users;

  constructor(private http: HttpClient) {
    http.get('users.json')
      .subscribe(res => {this.user = res[0]; this.users = res});
      // deletebtn.useremail = users[0].email;
  }
}
