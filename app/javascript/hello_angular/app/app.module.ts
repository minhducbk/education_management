import { NgModule }                                       from '@angular/core';

import { AppComponent }                                   from './app.component';
import { AppRoutingModule }                               from './app-routing.module';
import { AppBootstrapModule }                             from './app-boostrap.module';
//import { EditUserBtn }                      from './components/buttons/edit_user';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
}
