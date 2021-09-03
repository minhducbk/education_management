import { Component, Input }              from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, retry }             from "rxjs/operators";
import { throwError }                    from "rxjs";

@Component({
  selector: "userDeleteBtn",
  template: `
    <button type="submit" class="btn btn-info" (click)="deleteUser()">
      Delete
    </button>
  `
})
export class UserDeleteBtn {
  @Input() user;
  @Input() parent;
  httpClient;

  constructor(private httpC: HttpClient) {
    this.httpClient = httpC
  }

  deleteUser() {
    this.httpClient.delete("users/" + this.user.id).subscribe((res) => {
      this.parent.fetchData();
    });
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }
}
