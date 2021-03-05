import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './components/app.component';
import { UserIndexSection } from './components/sections/index.users.section';
import { EditUserSection } from './components/sections/edit.users.section';
import { EditUserButton } from './components/buttons/edit.user.btn';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: 'users/:id/edit', component: EditUserSection, pathMatch: 'full' },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'users', component: UserIndexSection }
];

 @NgModule({
  declarations: [
    AppComponent, UserIndexSection, EditUserSection, EditUserButton
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [UserIndexSection],
  entryComponents: [AppComponent, UserIndexSection],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
