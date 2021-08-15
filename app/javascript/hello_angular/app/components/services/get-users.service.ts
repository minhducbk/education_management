import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: "root",
})
export class GetUsersService {
  users;
  httpClient: HttpClient ;

  constructor(private httpC: HttpClient) {
    this.httpClient = httpC;
  }
  
  get_users(): any {
    return this.httpClient.get<any>("users.json")
  }
  
}