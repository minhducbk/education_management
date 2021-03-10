import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { IndexUserSection } from './components/sections/index.users.section';
import { EditUserSection } from './components/sections/edit.users.section';
import { DeleteUserButton } from './components/buttons/delete.user.btn';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserSection } from './components/sections/new.users.section';
// import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: 'users/:id/edit', component: EditUserSection },
  { path: 'users', component: IndexUserSection },
  { path: 'users/new', component: NewUserSection },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];

 @NgModule({
  declarations: [
    AppComponent, 
    IndexUserSection, 
    EditUserSection,
    NewUserSection, 
    DeleteUserButton
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, DeleteUserButton],
  exports: [
    RouterModule
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const deleteUserButton = createCustomElement(DeleteUserButton, { injector });
    customElements.define('delete-user-btn', deleteUserButton);
  }
  ngDoBootstrap() {}
}
