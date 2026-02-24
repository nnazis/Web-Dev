import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component/product-list.component';
import { Category, categories } from './category.model';
import { Product, initialProducts } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = categories;
  products = signal<Product[]>(initialProducts);
  selectedCategory = signal<number | null>(null);

  selectCategory(id: number) {
    this.selectedCategory.set(id);
  }

  getCurrentProducts(): Product[] {
    if (this.selectedCategory() === null) return [];
    return this.products().filter(p =>p.categoryId === this.selectedCategory()!);
  }

  deleteProduct(id: number) {
    this.products.update(ps => ps.filter(p => p.id !== id));
  }
}