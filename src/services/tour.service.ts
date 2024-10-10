// src/app/services/tour.service.ts

import {Injectable} from '@angular/core';
import {TourDto} from '../dtos/tour/tour.dto';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TourService {


  getTours(): Observable<TourDto[]> {
    const tours: TourDto[] = [
      {
        name: 'Gumno',
        imageUrl: '/assets/tour-preview/tour-preview.svg',
        description: 'Verry very preatty...',
        options: [
          {
            name: 'Option 1 ',
            price: {value: 70, currency: '$', suffix: 'Per Person'},
            duration: '1:30 Hours',
            perks: [
              {perk: '2H ride with speedboat', features: []},
              {perk: '20/30 min swimming and diving in Blue Cave', features: []},
              {
                perk: 'Visit Mamula island',
                features: ['Njegoš’s birthplace', ' O King Nikola Castle', 'O Cetinje Monastery']
              },
              {perk: 'Submarine base stop for 5/10 min', features: []}
            ],
            sideNote: 'Entrance fees to the national park, mausoleum, and zip line are not included in the price',
          },
        ],
        sideNote: 'My  peanuts',
      },
      {
        name: 'Gumno',
        imageUrl: '/assets/tour-preview/tour-preview.svg',
        description: 'Verry very preatty...',
        options: [
          {
            name: 'Option 1 ',
            price: {value: 70, currency: '$', suffix: 'Per Person'},
            duration: '1:30 Hours',
            perks: [
              {perk: '2H ride with speedboat', features: []},
              {perk: '20/30 min swimming and diving in Blue Cave', features: []},
              {
                perk: 'Visit Mamula island',
                features: ['Njegoš’s birthplace', ' O King Nikola Castle', 'O Cetinje Monastery']
              },
              {perk: 'Submarine base stop for 5/10 min', features: []}
            ],
            sideNote: 'Entrance fees to the national park, mausoleum, and zip line are not included in the price',
          },
        ],
        sideNote: 'My  peanuts',
      },
      {
        name: 'Gumno',
        imageUrl: '/assets/tour-preview/tour-preview.svg',
        description: 'Verry very preatty...',
        options: [
          {
            name: 'Option 1 ',
            price: {value: 70, currency: '$', suffix: 'Per Person'},
            duration: '1:30 Hours',
            perks: [
              {perk: '2H ride with speedboat', features: []},
              {perk: '20/30 min swimming and diving in Blue Cave', features: []},
              {
                perk: 'Visit Mamula island',
                features: ['Njegoš’s birthplace', ' O King Nikola Castle', 'O Cetinje Monastery']
              },
              {perk: 'Submarine base stop for 5/10 min', features: []}
            ],
            sideNote: 'Entrance fees to the national park, mausoleum, and zip line are not included in the price',
          },
        ],
        sideNote: 'My  peanuts',
      },
      {
        name: 'Gumno',
        imageUrl: '/assets/tour-preview/tour-preview.svg',
        description: 'Verry very preatty...',
        options: [
          {
            name: 'Option 1 ',
            price: {value: 70, currency: '$', suffix: 'Per Person'},
            duration: '1:30 Hours',
            perks: [
              {perk: '2H ride with speedboat', features: []},
              {perk: '20/30 min swimming and diving in Blue Cave', features: []},
              {
                perk: 'Visit Mamula island',
                features: ['Njegoš’s birthplace', ' O King Nikola Castle', 'O Cetinje Monastery']
              },
              {perk: 'Submarine base stop for 5/10 min', features: []}
            ],
            sideNote: 'Entrance fees to the national park, mausoleum, and zip line are not included in the price',
          },
        ],
        sideNote: 'My  peanuts',
      }
    ];

    return of(tours);
  }
}
