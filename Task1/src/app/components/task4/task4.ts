import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-task4',
  imports: [],
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
  styleUrl: './task4.css',
})
export class Task4 {
  message = '';
  showSecretMessage() {
    this.message = 'Way to go';
  }
}
