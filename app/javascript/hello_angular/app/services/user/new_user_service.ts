import { HttpClient, HttpErrorResponse }             from '@angular/common/http';
import { Injectable }                                from '@angular/core';
import { catchError, throwError }                    from 'rxjs';
import { Observable }                                from 'rxjs';
import { User }                                      from '../../models/user'

@Injectable({
	providedIn: "root",
})
export class CreateUserService {
  users;
  httpClient: HttpClient ;

  constructor(private httpC: HttpClient) {
    this.httpClient = httpC;
  }
  
  create_user(value) {
    return this.httpClient.post(
      "http://localhost:3000/users/create",
      { user: value },
      { responseType: "json" }
      )
      .pipe(
        catchError(this.handleError)
      )
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}