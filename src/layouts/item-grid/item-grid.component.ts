// src/app/components/item-grid/item-grid.component.ts

import {Component, Input} from '@angular/core';
import {TourDto} from '../../dtos/tour/tour.dto';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})


export class ItemGridComponent {

  @Input() tours!: TourDto[];
}
