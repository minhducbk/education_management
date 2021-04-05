import { Component } from '@angular/core';
import { UserDeleteBtn } from '../buttons/delete.user.btn';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'userindexsection',
  template: `<h1>Users#index ANGULAR</h1>
  <ul *ngFor="let user of users">
    <tr>
      <td>
        <p> {{user.email}} </p>  
        <a routerLink="/users/{{user.id}}/edit">
          <button type="submit" class="btn btn-info">Edit</button> 
        </a>
        <userDeleteBtn [user]="user" [parent]="parent"></userDeleteBtn>
      </td>
    </tr>
  </ul>
  `
})
export class IndexUserSection {
  public users;
  public parent;

  constructor(private http: HttpClient) {
    this.fetchData(http);
    this.parent = this;
  }

  fetchData(http: HttpClient) {
    http.get('users.json')
      .subscribe(res => {
          this.users = res;
      });
  }
}
