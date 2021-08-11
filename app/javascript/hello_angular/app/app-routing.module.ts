import { RouterModule, Routes }                           from "@angular/router";
import { NgModule }                                       from "@angular/core";
import { APP_BASE_HREF }                                  from '@angular/common';

import { IndexUserSection }                               from "./components/sections/users";
import { GetUsersService }                                from "./components/services/get-users.service";
import { SelectivePreloadingStrategyService }             from "./selective-preloading-strategy.service";
import { AppBootstrapModule }                             from "./app-boostrap.module";
import { BrowserModule }                                  from "@angular/platform-browser";
import { HttpClientModule }                               from "@angular/common/http";

const appRoutes: Routes = [
  // { path: 'users/:id/edit', component: EditUserSection },
  { path: 'users', component: IndexUserSection },
  // { path: 'users/new', component: NewUserSection },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  declarations: [IndexUserSection],
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        scrollPositionRestoration: "enabled",
        enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategyService,
      }),
    AppBootstrapModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, GetUsersService],
	exports: [ RouterModule],
})
export class AppRoutingModule {}
