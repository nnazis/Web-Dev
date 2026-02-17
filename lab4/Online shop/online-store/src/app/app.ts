import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductList} from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],
  template: `
    <header class="app-header">
      <h1>Kaspi.kz</h1>
      <p class="subtitle">Выберите товары с Kaspi</p>
    </header>
    <main>
      <app-product-list></app-product-list>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: Arial, sans-serif;
        padding: 1rem;
        background-color: #f8f9fa;
        color: #212529;
      }
      .app-header {
        text-align: center;
        margin-bottom: 1.5rem;
      }
      .app-header h1 {
        margin: 0;
        font-size: 2rem;
        color: #c41426;
      }
      .subtitle {
        margin: 0.25rem 0 0;
        font-size: 1rem;
        color: #555;
      }
      main {
        max-width: 1200px;
        margin: 0 auto;
      }
    `
  ]
})
export class App {
  protected readonly title = signal('online-store');
}
