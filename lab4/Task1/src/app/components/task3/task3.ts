import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-task3',
  imports: [],
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
      };
      @for (user of users; track user.id) {
        <p>{{user.name}}</p>
      }
  `,
  styleUrl: './task3.css',
})
export class Task3 {
  isServerRunning = true;
  users = [ {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}
