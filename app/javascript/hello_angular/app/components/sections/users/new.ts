import { Component, OnInit }      from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient }             from "@angular/common/http";
import { Location }               from "@angular/common";
import { FormGroup }              from "@angular/forms";

@Component({
  selector: "usernewsection",
  template: `
    <div>
      <h2>New user</h2>
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
  router;
  private location: Location;
  private http: HttpClient;

  constructor(private httpC: HttpClient, private router: Router) {
    this.newuserform = new FormGroup({});
    this.http = httpC;
    this.router = router;
  }

  onSubmit(value: any) {
    this.http
      .post(
        "http://localhost:3000/users/create",
        { user: value },
        { responseType: "text" as "json" }
      )
      .subscribe({
        next: (data) => {
          console.error("XXXXXXXXXXXX ", this);
          console.info("YYYYYYYYYYYY ", this);
          this.router.navigate([""]);
        },
        error: (error) => {
          console.error("There was an error!", error);
        },
      });
  }

  goBack(): void {
    this.location.back();
  }
}
