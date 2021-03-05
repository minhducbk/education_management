import { Component } from '@angular/core';

@Component({
  selector: 'delete-user-btn',
  template: `
  <button type="button" class="btn btn-default" onClickMe="redirect('/users/{{id}}')">Delete</button>`
})
export class DeleteUserButton {
  id = '';

  onClickMe(id :any) {
    this.id = id;
  }
}