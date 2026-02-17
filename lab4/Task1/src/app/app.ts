import { Component, inject } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import {RouterLink } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {CarService} from './components/car.service/car.service';
import {Task1} from './components/task1/task1';
import {Task2} from './components/task2/task2';
import {Task3} from './components/task3/task3';
import {Task4} from './components/task4/task4';
import {User} from './components/user/user';
import {Child} from './components/child/child';
import {Comments} from './components/comments/comments';
import {User1} from './components/user1/user1';
import {LowerCasePipe} from '@angular/common';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';
import {ReversePipe} from './components/reverse.pipe/reverse.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Task1, Task2, Task3, Task4, User, Child, Comments, User1, RouterLink, ReactiveFormsModule, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
  template: `
  <app-task1></app-task1>
  <app-task2></app-task2>
  <app-task3></app-task3>
  <app-task4></app-task4>
  <app-user name="Simran"/>
  <app-user1></app-user1>
  <div [contentEditable]="isEditable"></div>
  <app-child (addItemEvent)="addItem($event)" />
  <p>all the way down {{item.length}}</p>
  <div>
    <h1>How I feel about Angular</h1>
    <article>
      <p>
        Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
        feature that makes defer loading content the easiest and most ergonomic it could possibly be.
        The Angular community is also filled with amazing contributors and experts that create excellent
        content. The community is welcoming and friendly, and it really is the best community out there.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular. It offers the best developer
        experience I've ever had. I love that the Angular team puts their developers first and takes
        care to make us very happy. They genuinely want Angular to be the best framework it can be, and
        they're doing such an amazing job at it, too. This statement comes from my heart and is not at
        all copied and pasted. In fact, I think I'll say these exact same things again a few times.
      </p>
      <p>
        Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
        feature that makes defer loading content the easiest and most ergonomic it could possibly be.
        The Angular community is also filled with amazing contributors and experts that create excellent
        content. The community is welcoming and friendly, and it really is the best community out there.
      </p>
      </article>
      @defer (on viewport) {
        <comments /> 
      } @placeholder {
       <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...<p>
      }
  </div>
  <app-user1></app-user1>
  <nav>
    <a routerLink="/">Home</a>
    |
    <a routerLink="/user">User</a>
  </nav>
  <router-outlet />
  <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
    <label>
      Name
      <input type="text" formControlName="name" name="name"/>
    </label>
    <label>
      Email
      <input type="email" formControlName="email" name="email"/>
    </label>
    <button type="submit" [disabled]="!profileForm.valid">Submit</button>
  </form>
  <h2>Profile Form</h2>
  <p>Name: {{profileForm.value.name}} </p>
  <p>Email: {{profileForm.value.email}} </p>
  <p>{{carService.getCars()}} </p>
  <p>Car Listing: {{display}}</p>
  {{username | lowercase}}
  <li>Number with decimal" {{num | number: '3.2-2'}}</li>
  <li>Date with "date| {{birthday | date: 'medium'}} </li>
  <li>Currency with "currency" {{cost | currency}}</li>
  Reverse Machine: {{word | reverse}}
  `,
})
export class App {
  isEditable = true;
  items = new Array();
  addItem(items: string) {
    this.items.push(items);
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
  carService = inject(CarService);
  display = this.carService.getCars().join('⭐️');
  username = 'NAZIRA'
  num = 103.11233;
  birthday = new Date(2008, 2, 1);
  cost = 100029.99;
  word = 'You are a champion';
}
