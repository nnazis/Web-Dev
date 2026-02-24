import { Component, input, output, signal } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();
  currentImage = signal<string>('');

  ngOnInit() {
    this.currentImage.set(this.product().image);
  }

  changeImage(img: string) {
    this.currentImage.set(img);
  }

  getStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = Math.floor(rating / 2);
    return '★'.repeat(fullStars) + '☆'.repeat(halfStar);
  }

  like() {
    this.product().likes++;
  }

  share() {
    const text = encodeURIComponent(`Посмотрите этот продукт: ${this.product().name}`);
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  onDelete() {
    if (confirm('Вы уверены, что хотите удалить этот продукт?')) {
      this.delete.emit(this.product().id);
    }
  }
}