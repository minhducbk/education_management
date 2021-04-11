import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-user-btn',
  template: `
  <a type="button" class="btn btn-default" routerLink="/users/{{user.id}}/edit">Edit</a>`
})
export class EditUserButton {
}