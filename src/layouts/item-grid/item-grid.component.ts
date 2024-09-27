// src/app/components/item-grid/item-grid.component.ts

import { Component, OnInit } from '@angular/core';
import { TourService } from '../../services/tours/tour.service';
import { TourDto } from '../../dtos/tour/tour.dto';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})
export class ItemGridComponent implements OnInit {

  tours: TourDto[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.getTours().subscribe((data: TourDto[]) => {
      this.tours = data.slice(0, 4); // Ensure only 4 tours are taken
    });
  }

}
