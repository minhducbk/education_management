import { Component } from '@angular/core';

@Component({
  selector: 'hello_angular',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
  name = 'EducationManagement!';
}
