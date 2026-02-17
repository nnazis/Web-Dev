import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-task1',
  imports: [],
  template: `
    Hello {{city}}, {{1 + 1}}
  `,
  styleUrl: './task1.css',
})
export class Task1 {
  city = 'San-Fransisco'
}
