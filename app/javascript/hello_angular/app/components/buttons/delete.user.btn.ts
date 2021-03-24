import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { User } from 'hello_angular/app/models/user';

@Component({
  selector: 'delete-user-btn',
  template: `
  <p>{{user}}</p>
  <button type="submit" class="btn btn-info" (click)="deleteUser()">{{user}}</button>
  `
})
export class DeleteUserButton implements OnInit {
  @Input() user: any;

  constructor (){
    console.log("111 ", this.user);
  } 

  deleteUser() {
    console.log("2333", this.user);
    console.log("4444", this);
  }
}