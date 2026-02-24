export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  likes: number;
  categoryId: number;
}

export const initialProducts: Product[] = [
  { id: 1, 
    name: 'Apple iPhone 15 128GB Черный', 
    description: 'Мощный смартфон с процессором A16 Bionic. Яркий 6.1-дюймовый Super Retina XDR дисплей. Камера 48 Мп для потрясающих фото.', 
    price: 379990, 
    rating: 4.8, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-small', 
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000', 
    likes: 0, 
    categoryId: 1 
},
  { id: 2, 
    name: 'Samsung Galaxy S24 256GB Серый', 
    description: 'Флагман с ИИ-функциями. 6.2-дюймовый Dynamic AMOLED дисплей. Тройная камера 50 Мп, быстрая зарядка.', 
    price: 399990, 
    rating: 4.9, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
    likes: 0, 
    categoryId: 1 
},
  { id: 3, 
    name: 'Xiaomi Redmi Note 13 Pro 256GB Черный', 
    description: 'Бюджетный смартфон с AMOLED дисплеем 6.67". Камера 200 Мп, батарея 5000 мАч. Быстрая зарядка 67Вт.', 
    price: 149990, 
    rating: 4.7, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000', 
    likes: 0, 
    categoryId: 1
},
  { id: 4, 
    name: 'iPhone 16 Pro 256Gb Black', 
    description: 'Смартфон с чистым Android. Камера с ИИ, 6.2" OLED дисплей. Долгие обновления ОС.', 
    price: 299990, 
    rating: 4.6, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-zolotistyi-123888919/?c=750000000', 
    likes: 0, 
    categoryId: 1 
},
  { id: 5, 
    name: 'Samsung AGlaxy 36 8Gb', 
    description: 'Флагман с Snapdragon 8 Gen 3. 6.82" AMOLED, камера Hasselblad 50 Мп. Супербыстрая зарядка.', 
    price: 449990, 
    rating: 4.9, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p4c/p39/30554064.png?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p39/30554064.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p39/30554065.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p39/30554066.png?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-256-gb-chernyi-136435352/?c=750000000', 
    likes: 0, 
    categoryId: 1 
},

  { id: 6, 
    name: 'Apple MacBook Air M2 256GB Серебристый', 
    description: 'Легкий ноутбук с чипом M2. 13.6" Retina дисплей, до 18 часов автономности. Для работы и творчества.', 
    price: 549990, 
    rating: 4.9, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000', 
    likes: 0, 
    categoryId: 2 
},
  { id: 7,
     name: 'Lenovo IdeaPad 3 15.6" Ryzen 5 8GB 512GB', 
     description: 'Бюджетный ноутбук для повседневных задач. 15.6" FHD дисплей, быстрый SSD. Подходит для учебы.', 
     price: 249990, 
     rating: 4.5, 
     image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium', 
     images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000', 
    likes: 0, 
    categoryId: 2 
},
  { id: 8, 
    name: 'Asus ROG Strix G16 i7 16GB 4060', 
    description: 'Игровой ноутбук с мощной графикой. 16" 165Hz дисплей, RGB подсветка. Для игр и рендеринга.', 
    price: 799990, 
    rating: 4.8, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h88/70303438012446.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hdc/70303438536734.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000', 
    likes: 0, 
    categoryId: 2 
},
  { id: 9, 
    name: 'HP Pavilion x360 14" i5 8GB 512GB', 
    description: 'Конвертируемый ноутбук-планшет. 14" сенсорный дисплей, стилус в комплекте. Для мобильной работы.', 
    price: 349990, 
    rating: 4.6, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p4d/p04/21724117.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/p04/21724117.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/p04/21724118.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/p06/21724120.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/hp-probook-440-g11-uma-core-ultra-5-125u-512gb-ssd-8gb-14-0-quot-wuxga-ips-win-11-pro-a23h1ea-14-8-gb-ssd-512-gb-win-11-pro-a23h1ea-133847486/?c=750000000', 
    likes: 0, 
    categoryId: 2 
},
  { id: 10, 
    name: 'Dell XPS 13 13.4" i7 16GB 512GB', 
    description: 'Премиум ультрабук с InfinityEdge дисплеем. Легкий, мощный, долгая автономность.', 
    price: 699990, 
    rating: 4.7, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p15/p77/43905750.jpeg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/p7a/43905751.jpeg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/dell-xps-13-9345-13-4-16-gb-ssd-512-gb-win-11-210-bmtr-140113298/?c=750000000', 
    likes: 0, 
    categoryId: 2 
},

  { id: 11, 
    name: 'Apple AirPods Pro 2 Белый', 
    description: 'Беспроводные наушники с активным шумоподавлением. Пространственный звук, адаптивный EQ. До 6 часов работы.', 
    price: 119990, 
    rating: 4.8, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000', 
    likes: 0, 
    categoryId: 3 
},
  { id: 12,
    name: 'Sony WH-1000XM5 Черный', 
    description: 'Наушники с лучшим шумоподавлением. 30 часов автономности, LDAC кодек. Комфортные для длительного ношения.', 
    price: 199990, 
    rating: 4.9, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000', 
    likes: 0, 
    categoryId: 3 
},
  { id: 13, 
    name: 'JBL Tune 500', 
    description: 'Недорогие наушники с мощным басом. Складные, микрофон для звонков. Легкие и удобные.', 
    price: 14990, 
    rating: 4.5, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000', 
    likes: 0, 
    categoryId: 3 
},
  { id: 14, 
    name: 'Bose QuietComfort 45', 
    description: 'Наушники с шумоподавлением. 24 часа автономности, удобные амбушюры. Качественный звук.', 
    price: 159990, 
    rating: 4.7, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000', 
    likes: 0, 
    categoryId: 3 
},
  { id: 15, 
    name: 'Samsung Galaxy Buds2 Pro', 
    description: 'TWS наушники с шумоподавлением. 360 звук, водозащита IPX7. До 8 часов работы.', 
    price: 69990, 
    rating: 4.6, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7c/64496882024478.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/64496884776990.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?c=750000000', 
    likes: 0, 
    categoryId: 3 
},

  { id: 16, 
    name: 'Apple iPad Air 5 64GB Фиолетовый', 
    description: 'Планшет с чипом M1. 10.9" Liquid Retina дисплей, поддержка Pencil. Для творчества и развлечений.', 
    price: 299990, 
    rating: 4.7, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p39/pbd/37020300.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-fioletovyi-138202498/?c=750000000', 
    likes: 0, 
    categoryId: 4 
},
  { id: 17, 
    name: 'Samsung Galaxy Tab S9 256GB', 
    description: 'Флагманский планшет с S Pen. 11" Dynamic AMOLED, IP68 защита. Мощный для работы.', 
    price: 399990, 
    rating: 4.9, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000', 
    likes: 0, 
    categoryId: 4 
},
  { id: 18, 
    name: 'Lenovo Tab M10 Plus 128GB Серый', 
    description: 'Бюджетный планшет для семьи. 10.3" FHD дисплей, 4 динамика. Для видео и чтения.', 
    price: 99990, 
    rating: 4.5, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/hf4/66937353699358.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h74/hf4/66937353699358.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h69/hbb/66937354223646.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/hef/66937354747934.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-tb125fu-10-6-djuim-4-gb-64-gb-seryi-108063658/?c=750000000', 
    likes: 0, 
    categoryId: 4 
},
  { id: 19, 
    name: 'Microsoft Surface Pro 9 i5 8GB 256GB', 
    description: '2-в-1 планшет с клавиатурой. 13" PixelSense дисплей, Windows 11. Для продуктивности.', 
    price: 499990, 
    rating: 4.8, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/p54/4033328.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p54/4033328.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/pfb/pe4/114110113.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p17/pe5/114110114.jpg?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-11-x-elite-13-djuim-16-gb-512-gb-chernyi-128764672/?c=750000000', 
    likes: 0, 
    categoryId: 4 
},
  { id: 20, 
    name: 'Xiaomi Pad 6 256GB', 
    description: 'Планшет с Snapdragon 870. 11" 144Hz дисплей, 4 динамика. Для игр и мультимедиа.', 
    price: 199990, 
    rating: 4.7, 
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium', 
    images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium'
    ], 
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000', 
    likes: 0, 
    categoryId: 4 
},
];