import { Component }                                                                 from "@angular/core";
import { GetUsersService }                                                           from "../../services/get-users.service";


@Component({
  selector: "indexusersection",
  template: `<h1>Users#index ANGULAR</h1>
    <ul *ngFor="let user of users">
      <tr>
        <td>
          <p>{{ user.email }}</p>
        </td>
      </tr>
    </ul> `,
})
export class IndexUserSection {
  public users;
  public parent;

  constructor(private getUsersService: GetUsersService) {
    this.parent = this;
    this.users = this.getUsersService.get_users();
    debugger
  }
}
//          <a routerLink="/users/{{ user.id }}/edit">
//<button type="submit" class="btn btn-info">Edit</button>
//</a>
//<userDeleteBtn[user]="user"[parent] = "parent" > </userDeleteBtn>
