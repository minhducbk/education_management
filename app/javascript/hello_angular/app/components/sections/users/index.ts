import { Component }                                                                 from "@angular/core";
import { GetUsersService }                                                           from "../../../services/user/get_users_service";
import { User }                                                                      from '../../../models/user'


@Component({
  selector: "indexusersection",
  template: `<h1>Users#index ANGULAR</h1>
    <ul *ngFor="let user of users">
      <tr>
        <td>
          <span>{{ user.id + ' '}}  </span>
        </td>
        <td> | </td> 
        <td>
          <span class="ml-2">{{ user.email }}</span>
        </td>
        <a routerLink="/users/{{ user.id }}/edit">
          <button type="submit" class="btn btn-info">Edit</button>
        </a>
        <userDeleteBtn [user]="user" [parent]="current_user_selector"> </userDeleteBtn>
      </tr>
    </ul> `,
  providers: [GetUsersService],
})
export class IndexUserSection {
  public users: User[] = new Array();
  public current_user_selector;
  
  constructor(private getUsersService: GetUsersService) {
    this.current_user_selector = this;
    this.fetchData();
  }

  public fetchData() { 
    this.getUsersService.get_users()
      .subscribe(
        response => {
          response.forEach((user) => {
            this.users.push(Object.assign(new User(user)))
          });
        }
      );
  }
}
