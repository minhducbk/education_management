import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditUserButton } from '../buttons/edit.user.btn';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'user-edit-section',
  template: `
  <div *ngIf="user">
    <h2>{{user.name | uppercase}} Edit</h2>
    <div><span>User id: </span>{{user.id}}</div>
    <div>
      <label for="user-name">user name: </label>
      <input id="user-name" [(ngModel)]="user.name" placeholder="User name"/>
    </div>
    <button (click)="goBack()">go back</button>
  </div>
  
  `
})
export class EditUserSection {
  user;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient) {
    const id = +this.route.snapshot.paramMap.get('id');
    http.get<User>('/users/' + id + '/edit.json')
    .subscribe(res => this.user = res);
  }

  goBack(): void {
    this.location.back();
  }

}
