import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = input.required<Product[]>();
  delete = output<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }
}