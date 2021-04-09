import { Component, OnInit } from "@angular/core";
import { ActivatedRoute }    from "@angular/router";
import { HttpClient }        from "@angular/common/http";
import { User }              from "../../models/user";
import { Location }          from "@angular/common";

@Component({
  selector: "usernewsection",
  template: `
    <div>
      <h2>New user</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
        <input name="email" formControlName="email" />
        <input name="name" formControlName="name" />
        <input name="password" formControlName="password" />
        <input
          name="password_confirmation"
          formControlName="password_confirmation"
        />
        <select name="role" formControlName="role" id="role">
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit">Save</button>
      </form>
      <button (click)="goBack()">go back</button>
    </div>
  `,
})
export class NewUserSection {
  user;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  goBack(): void {
    this.location.back();
  }
}
