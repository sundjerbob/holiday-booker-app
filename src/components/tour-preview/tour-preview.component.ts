// tour-preview.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { TourDto } from '../../dtos/tour/tour.dto';

@Component({
  selector: 'app-tour-preview',
  templateUrl: './tour-preview.component.html',
  styleUrls: ['./tour-preview.component.scss']
})

export class TourPreviewComponent implements OnInit {

  @Input() tour!: TourDto;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tour.imageUrl);
  }

}
