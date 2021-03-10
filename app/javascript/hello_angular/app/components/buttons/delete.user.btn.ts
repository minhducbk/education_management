import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'delete-user-btn',
  template: `
  <button type="submit" class="btn btn-info" (click)="deleteUser()">Delete</button>
  `
})
export class DeleteUserButton {
  @Input() userid: string;

  constructor (){
    // console.log("111 ", this.userId);
  } 

  deleteUser() {
    console.log("2333", this.userid);
  }
}