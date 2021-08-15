import { NgModule }                                       from '@angular/core';
import { AppComponent }                                   from './app.component';
import { AppRoutingModule }                               from './app-routing.module';
import { HttpClientModule }                               from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }               from '@angular/forms';
import { BrowserModule }                                  from '@angular/platform-browser';
import { AppBootstrapModule }                             from './app-boostrap.module';
import { IndexUserSection }                               from './components/sections/users';
import { EditUserSection }                                from './components/sections/users/edit';
import { NewUserSection }                                 from './components/sections/users/new';

@NgModule({
  declarations: [
    AppComponent, IndexUserSection, EditUserSection, NewUserSection
  ],
  imports: [
		HttpClientModule,
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppBootstrapModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
