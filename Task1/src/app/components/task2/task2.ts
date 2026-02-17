import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    username: {{username}}
  `,
})
export class User {
  username = 'youngTech';
}
@Component ({
  selector: 'app-task2',
  template : `
    <app-user></app-user>
  `,
  imports: [User]
})
export class Task2 {
  
}
