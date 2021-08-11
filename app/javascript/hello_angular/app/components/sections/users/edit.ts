// import { Component }                             from '@angular/core';
// import { ActivatedRoute }                        from '@angular/router';
// import { HttpClient }                            from '@angular/common/http';
// import { User }                                  from '../../../models/user';
// import { Location }                              from '@angular/common';

// @Component({
//   selector: 'editusersection',
//   template: `
//   <div *ngIf="user">
//     <h2>{{user.name }} Edit</h2>
//     <div><span>User id: </span>{{user.id}}</div>
//     <div>
//       <label for="user-name">user name: </label>
//       <input id="user-name" [(ngModel)]="user.name" placeholder="User name"/>
//     </div>
//     <button (click)="goBack()">go back</button>
//   </div>
  
//   `
// })
// export class EditUserSection {
//   user;
//   private location: Location;
//   private route: ActivatedRoute;
//   private http: HttpClient;

//   constructor() {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.http.get<User>('/users/' + id + '/edit.json')
//         .subscribe(res => this.user = res);
//   }

//   goBack(): void {
//     this.location.back();
//   }

// }
