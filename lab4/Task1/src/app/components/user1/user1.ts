import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user1',
  imports: [NgOptimizedImage],
  template: `
    <p>Username: {{username}}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" priority />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32"/>
      </li>
    </ul> 
  `,
})
export class User1 {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
