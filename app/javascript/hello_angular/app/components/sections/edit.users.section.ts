import { Component } from '@angular/core';
import { EditUserButton } from '../buttons/edit.user.btn';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-edit-section',
  template: `<h1>Users#edit angular</h1>
  <ul>
  </ul>
  <p>Find me in app/views/users/edit.html.erb</p>
  `
})
export class EditUserSection {
  user;

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/users.json')
      .subscribe(res => this.user = res);
  }
}
