import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {
  perfumes = [
    {
      brand: 'Tauer Perfumes',
      name: 'Phtaloblue',
      imgSrc: 'https://fimgs.net/mdimg/perfume/375x500.61648.jpg',
      description: "<p>Encapsulating the nativeness and briskness of a day at the sea.</p><p>Phtaloblue is fresh and bright with elegant citrus and herbaceous notes, and at the same time rich and deep with balsamic woody and floral accords.</p>"
    },
    {
      brand: 'Acqua di Parma',
      name: 'Colonia Assoluta',
      imgSrc: 'https://fimgs.net/mdimg/perfume/375x500.1682.jpg',
      description: "<p>Colonia Assoluta is a bright and joyous fragrance that evokes the carefree idleness of summer with its lashings of tart citrus, creamy ylang-ylang and breezy jasmine.</p>"
    },
    {
      brand: 'Kilian',
      name: 'Roses on Ice',
      imgSrc: 'https://fimgs.net/mdimg/perfume/375x500.62616.jpg',
      description: "<p>The perfume Roses on Ice opens with the aquatic freshness of cucumber and the aromatic uplift of juniper berries, creating an icy sensation, rounded in an accord with voluptuous Rose Centifolia.</p>"
    }
  ];

  constructor() { }
}
