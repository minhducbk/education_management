import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs';
import { User }       from '../../models/user'

@Injectable({
	providedIn: "root",
})
export class GetUsersService {
  users;
  httpClient: HttpClient ;

  constructor(private httpC: HttpClient) {
    this.httpClient = httpC;
  }
  
  get_users(): Observable<User[]> {
    return this.httpClient.get<User[]>("users.json")
  }
  
}