import { Component }                                                                          from "@angular/core";
import {  Router }                                                                            from "@angular/router";
import { HttpClient, HttpErrorResponse }                                                      from "@angular/common/http";
import { Location }                                                                           from "@angular/common";
import { FormGroup }                                                                          from "@angular/forms";
import { catchError }                                                                         from "rxjs/operators";
import { throwError }                                                                         from "rxjs";
import { UserResponse }                                                                       from '../../../models/api_responses/user_response';
import { CreateUserService }                                                                  from "hello_angular/app/services/user/new_user_service";

@Component({
  selector: "usernewsection",
  template: `
    <div>
      <h2>New user</h2>
      <div class="alert alert-danger" *ngIf="error_message">
        <div>{{error_message}}</div>
      </div>
      <form #newuser="ngForm" (ngSubmit)="onSubmit(newuser.value)">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            required
            ngModel
            name="email"
            type="text"
            #email="ngModel"
            class="form-control"
            id="email"
          />
          <div class="alert alert-danger" *ngIf="email.touched && !email.valid">
            <div *ngIf="email.errors.required">Email is required.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="name">Name</label>
          <input
            required
            ngModel
            name="name"
            type="text"
            #name="ngModel"
            class="form-control"
            id="name"
          />
          <div class="alert alert-danger" *ngIf="name.touched && !name.valid">
            Name is required.
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            required
            ngModel
            #password="ngModel"
            name="password"
            id="password"
            cols="30"
            rows="10"
            class="form-control"
          />
          <div
            class="alert alert-danger"
            *ngIf="password.touched && !email.valid"
          >
            Password is required.
          </div>
        </div>

        <div class="form-group">
          <label for="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            required
            ngModel
            #password_confirmation="ngModel"
            name="password_confirmation"
            id="password_confirmation"
            cols="30"
            rows="10"
            class="form-control"
          />
          <div
            class="alert alert-danger"
            *ngIf="password_confirmation.touched && !email.valid"
          >
            Password Confirmation is required.
          </div>
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <select
            required
            ngModel
            #role="ngModel"
            name="role"
            cols="30"
            rows="10"
            class="form-control"
            id="role"
          >
            <option value="Teacher" ng-selected="true">Teacher</option>
            <option value="Student">Student</option>
          </select>
          <div class="alert alert-danger" *ngIf="role.touched && !role.valid">
            Role is required.
          </div>
        </div>

        <button
          class="btn btn-primary"
          type="submit"
          [class.disabled]="!newuser.valid"
        >
          Submit
        </button>
      </form>
      <button (click)="goBack()">go back</button>
    </div>
  `,
})
export class NewUserSection {
  newuserform;
  error_message;
  private location: Location;
  private http: HttpClient;

  constructor(private create_user_service: CreateUserService, private router: Router) {
    this.newuserform = new FormGroup({});
  }

  onSubmit(value: any) {
    this.create_user_service
      .create_user(value)
      .subscribe(
        data => {
          let parsed_data = Object.assign(new UserResponse(), data)
          if (parsed_data.status == 'ok') {
            this.router.navigate([''])
          } else {
            this.error_message = parsed_data.error_message
          }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
