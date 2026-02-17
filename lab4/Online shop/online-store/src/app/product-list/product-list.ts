import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductModel} from '../component/product.model/product.model';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  template: `
    <div class="product-list">
      <app-product-card
        *ngFor="let product of products"
        [product]="product"
        class="product-item"
      ></app-product-card>
    </div>
  `,
  styles: `
    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
        width: 100%;
      }
      .product-item {
        display: flex;
        flex-direction: column;
      }
  `,
})
export class ProductList {
  readonly products: ProductModel[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 13 128 Gb белый',
      description:
        'Компактный смартфон с 6.1‑дюймовым дисплеем Super Retina XDR и обновлённой системой двух камер. Чип A15 Bionic и кинематографический режим обеспечивают превосходную съёмку и высокую производительность.',
      price: 318806,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-small',        
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/'
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S23 5G 8/256 ГБ сиреневый',
      description:
        'Флагман от Samsung c 6.1‑дюймовым Dynamic AMOLED 2X экраном и частотой обновления 120 Гц. Тройная камера 50 + 12 + 10 Мп и процессор Snapdragon 8 Gen 2 обеспечивают яркие фотографии и высокую скорость работы.',
      price: 399990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h20/69065028435998.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-medium',       
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h24/69065018474526.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/hed/69065019523102.jpg?format=gallery-small'     
        ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-zelenyi-108915923/'
    },
    {
      id: 3,
      name: 'Ноутбук Apple MacBook Air 13 (2020, M1, 8 GB/256 GB)',
      description:
        'Лёгкий ноутбук с 13.3‑дюймовым Retina дисплеем и фирменным чипом Apple M1. Устройство оснащено 8 ГБ оперативной памяти и SSD 256 ГБ, обеспечивая тихую работу без вентилятора и до 18 часов автономности.',
      price: 385903,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-m1-8-gb-256-gb-100798912/'
    },
    {
      id: 4,
      name: 'Смартфон Xiaomi Redmi Note 12 Pro+ 6/128 GB серый',
      description:
        'Смартфон с ярким 6.67‑дюймовым AMOLED‑экраном, процессором Snapdragon 685 и аккумулятором 5000 мА·ч. Тройная камера 50 + 8 + 2 Мп и быстрая зарядка обеспечивают удобство использования.',
      price: 109990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h10/79755729600542.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/hd4/79843632807966.jpg?format=gallery-small',
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/h3a/79840518799390.jpg?format=gallery-small'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-6-gb-128-gb-seryi-109734268/'
    },
    {
      id: 5,
      name: 'Портативная колонка JBL Flip 5 чёрный',
      description:
        'Компактная Bluetooth‑колонка мощностью 20 Вт с аккумулятором ёмкостью 4800 мА·ч. Влагозащищённый корпус по стандарту IPX7 и до 12 часов автономной работы делают её идеальной для путешествий.',
      price: 36588,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/hfd/63781075025950.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/hfd/63781075025950.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p36/pff/37767805.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p52/pff/37767804.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-flip-5-chernyi-11500863/'
    },
    {
      id: 6,
      name: 'Наушники Sony WH‑1000XM4 чёрный',
      description:
        'Беспроводные накладные наушники с системой активного шумоподавления и поддержкой LDAC. До 30 часов работы с шумоподавлением обеспечивают комфорт при прослушивании.',
      price: 489999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pde/11569144.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-101003344/'
    },
    {
      id: 7,
      name: 'Ноутбук Huawei MateBook D 14" / 16 Гб ',
      description:
        'Универсальный ультрабук для работы, учебы и развлечений, сочетающий в себе мощный процессор Intel Core i5-13420H и стильный дизайн. ',
      price: 380000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h36/86064645963806.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p73/p6c/49540808.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p69/49540810.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb3/p69/49540812.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eh3056ci-a19w6ea-119606499/'
    },
    {
      id: 8,
      name: 'Телевизор Haier 55 OLED S9 140 см черный',
      description:
        '55‑дюймовый OLED‑телевизор с разрешением 4K UHD и частотой обновления 100 Гц. Смарт‑платформа, мощные 40‑ваттные динамики и тонкий дизайн обеспечивают яркое изображение и богатый звук.',
      price: 800000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/hb8/64063226642462.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf4/p46/6787163.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/p47/6787165.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h81/hb8/64063226642462.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled-55bxrla-140-sm-chernyi-100848466/'
    },
    {
      id: 9,
      name: 'Вертикальный пылесос Dyson V15 Detect серебристый',
      description:
        'Высокопроизводительный беспроводной пылесос с мотором 660 Вт, HEPA‑фильтром и ЖК‑дисплеем. Работает до 60 минут от аккумулятора и оснащён насадками для разных поверхностей.',
      price: 380988,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/ha8/63658431315998.jpg?format=gallery-large',
      images: [  
        'https://resources.cdn-kaspi.kz/img/m/p/h6a/h68/84160720601118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h20/81397947367454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/ha8/63658431315998.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-serebristyi-107093776/'
    },
    {
      id: 10,
      name: 'Стиральная машина Samsung WW80A6S24AW/LD белый',
      description:
        'Стиральная машина с загрузкой 8 кг и технологией Eco Bubble для эффективной стирки при низких температурах. Скорость отжима 1200 об/мин и функции паровой обработки деликатно очищают бельё.',
      price: 284900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hdd/64374815424542.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/hdd/64374815424542.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h7d/64195384475678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h01/64195426484254.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-ww80a6s24aw-ld-belyi-102893384/'
    }
  ];
}
