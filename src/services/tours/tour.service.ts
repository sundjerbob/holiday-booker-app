// src/app/services/tour.service.ts

import { Injectable } from '@angular/core';
import { TourDto } from '../../dtos/tour/tour.dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TourService {

  constructor() { }

  getTours(): Observable<TourDto[]> {
    const tours: TourDto[] = [

      {
        name: 'asasa',
        imageUrl: '../../assets/tour-preview/test-tour-prev.svg',
        description: 'Verry very preatty...',
        options: [],
        sideNote: 'My nigga my nigga',
      }
    ];

    return of(tours);
  }
}
