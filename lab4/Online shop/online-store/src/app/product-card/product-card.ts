import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductModel} from '../component/product.model/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="image-container">
        <img
          [src]="currentImage"
          [alt]="product.name"
          class="main-image"
        />
        <div class="gallery" *ngIf="product.images && product.images.length">
          <button
            class="nav prev"
            (click)="prevImage()"
            aria-label="Предыдущее изображение"
            *ngIf="product.images.length > 1"
          >&#10094;</button>
          <div class="thumbnails">
            <img
              *ngFor="let img of product.images; let i = index"
              [src]="img"
              (click)="selectImage(i)"
              [class.active]="i === currentIndex"
              [alt]="product.name + ' фото ' + (i + 1)"
            />
          </div>
          <button
            class="nav next"
            (click)="nextImage()"
            aria-label="Следующее изображение"
            *ngIf="product.images.length > 1"
          >&#10095;</button>
        </div>
      </div>
      <div class="card-content">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price | number }} ₸</p>
        <div class="rating">
          <span *ngFor="let star of stars; let i = index">
            <ng-container *ngIf="i < filledStars; else emptyStar">&#9733;</ng-container>
            <ng-template #emptyStar>&#9734;</ng-template>
          </span>
          <span class="rating-value">{{ product.rating.toFixed(1) }}</span>
        </div>
        <div class="actions">
          <a
            [href]="product.link"
            target="_blank"
            rel="noopener noreferrer"
            class="product-link"
            >На страницу</a
          >
          <div class="share">
            <a
              [href]="whatsAppShareLink()"
              target="_blank"
              rel="noopener noreferrer"
              title="Поделиться в WhatsApp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                class="share-icon"
              />
            </a>
            <a
              [href]="telegramShareLink()"
              target="_blank"
              rel="noopener noreferrer"
              title="Поделиться в Telegram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                class="share-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
        border: 1px solid #e3e3e3;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        height: 100%;
      }
      .image-container {
        position: relative;
        width: 70%;
      }
      .main-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 4px;
      }
      .gallery {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
      }
      .gallery .nav {
        background: transparent;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        color: #555;
        padding: 0 0.5rem;
      }
      .thumbnails {
        display: flex;
        overflow-x: auto;
        gap: 0.25rem;
      }
      .thumbnails img {
        width: 48px;
        height: 48px;
        object-fit: cover;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s, border-color 0.2s;
      }
      .thumbnails img.active {
        border-color: #007bff;
        opacity: 1;
      }
      .card-content h3 {
        margin: 0.5rem 0;
        font-size: 1.1rem;
        color: #333;
      }
      .card-content p {
        margin: 0.25rem 0;
        color: #555;
      }
      .price {
        font-weight: bold;
        color: #c41426;
        margin-top: 0.5rem;
      }
      .rating {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        font-size: 0.9rem;
      }
      .rating span {
        color: #f5c518;
        font-size: 1rem;
      }
      .rating-value {
        margin-left: 0.25rem;
        color: #555;
      }
      .actions {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .product-link {
        color: #007bff;
        text-decoration: none;
        font-weight: 600;
      }
      .product-link:hover {
        text-decoration: underline;
      }
      .share {
        display: flex;
        gap: 0.5rem;
      }
      .share-icon {
        width: 24px;
        height: 24px;
      }
  `]
})
export class ProductCard {
  @Input() product!: ProductModel;
  currentIndex = 0;
     
  get currentImage(): string {
    return this.product.images && this.product.images.length > 0
      ? this.product.images[this.currentIndex]
      : this.product.image;
  }
  get stars(): any[] {
    return new Array(5);
  }
  get filledStars(): number {
    return Math.round(this.product.rating);
  }
   selectImage(index: number): void {
    this.currentIndex = index;
  }
  prevImage(): void {
    if (this.product.images && this.product.images.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.product.images.length) % this.product.images.length;
    }
  }
  nextImage(): void {
    if (this.product.images && this.product.images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.product.images.length;
    }
  }
  whatsAppShareLink(): string {
    const message = ` ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
  telegramShareLink(): string {
    const url = this.product.link;
    const text = this.product.name;
    return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  }
}
