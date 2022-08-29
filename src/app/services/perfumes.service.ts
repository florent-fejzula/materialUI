import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {
  checked!: false;
  perfumes = [
    {
      brand: 'Armani Prive',
      name: 'Vetiver Babylone',
      imgSrc: [
        '../assets/images/babylon.jpeg',
        '../assets/images/babylon2.jpg',
      ],
      description: "<p> Fresh zesty citrus accords.</p><p>Babylon image of a plentiful oasis hanging above an arid landscape.</p><p>Cool icy winters in Winter Palace St. Petersburg.</p>"
    },
    {
      brand: 'Kilian',
      name: 'Roses on Ice',
      imgSrc: [
        '../assets/images/rosesIce.jpg',
        '../assets/images/rosesIce2.jpg',
      ],
      description: "<p>The perfume Roses on Ice opens with the aquatic freshness of cucumber and the aromatic uplift of juniper berries, creating an icy sensation, rounded in an accord with voluptuous Rose Centifolia.</p>"
    },
    {
      brand: 'Marc Antoine Barrois',
      name: 'Ganymede',
      imgSrc: [
        '../assets/images/ganymede.jpg',
        '../assets/images/ganymede2.jpg',
      ],
      description: "<p>Rocky satellite moon of Jupiter, both luminous and covered with salt-water oceans.</p>Elegant and unexpected harmony around a quartet of mandarin, violet, immortelle and suede"
    }
  ];

  constructor() { }

  getAllPerfumes(): any {
    const perfumeList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.perfumes)
      }, 2000);
    });
    return perfumeList;
  }
}
