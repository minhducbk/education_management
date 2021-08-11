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
  
  get_users() {
    this.httpClient.get("users.json").subscribe((res) => {
      this.users = res;
    });
    debugger;
    return this.users;
  }
  
}