import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {
  checked!: false;
  perfumes = [
    {
      brand: 'Tauer Perfumes',
      name: 'Phtaloblue',
      imgSrc: [
        'https://fimgs.net/mdimg/perfume/375x500.61648.jpg',
        'http://www.theperfumegirl.com/perfumes/fragrances/tauer-perfumes/phtaloblue-tauer/images/phtaloblue-tauer-ad-lg.jpg',
      ],
      description: "<p>Encapsulating the nativeness and briskness of a day at the sea.</p><p>Phtaloblue is fresh and bright with elegant citrus and herbaceous notes, and at the same time rich and deep with balsamic woody and floral accords.</p>"
    },
    {
      brand: 'Acqua di Parma',
      name: 'Colonia Assoluta',
      imgSrc: [
        'https://fimgs.net/mdimg/perfume/375x500.1682.jpg',
        'https://img.parfumo.de/user_imagery/60/60_1896_d133ffd2956447de0044c37e6ee5a003_1200.jpg',
      ],
      description: "<p>Colonia Assoluta is a bright and joyous fragrance that evokes the carefree idleness of summer with its lashings of tart citrus, creamy ylang-ylang and breezy jasmine.</p>"
    },
    {
      brand: 'Kilian',
      name: 'Roses on Ice',
      imgSrc: [
        'https://fimgs.net/mdimg/perfume/375x500.62616.jpg',
        'https://m.bykilian.com/media/images/products/833x968/kl_sku_N36H01_833x968_2.jpg',
      ],
      description: "<p>The perfume Roses on Ice opens with the aquatic freshness of cucumber and the aromatic uplift of juniper berries, creating an icy sensation, rounded in an accord with voluptuous Rose Centifolia.</p>"
    }
  ];

  constructor() { }
}
