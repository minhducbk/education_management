import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-user-btn',
  template: `
  <button type="button" class="btn btn-default" (click)="onClickMe(1)">Edit</button>`
})
export class EditUserButton {
  constructor(
    private router: Router
  ) { }
  id: '';

  onClickMe(id :any) {
    this.id = id;
    this.router.navigate(['users/' + id + '/edit']);
    console.log("navigate successfully");
  }
}