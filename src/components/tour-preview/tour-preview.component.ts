import { Component, OnInit, Input } from '@angular/core';
import { TourDto } from '../../dtos/tour.dto';

@Component({
  selector: 'app-tour-preview',
  templateUrl: './tour-preview.component.html',
  styleUrls: ['./tour-preview.component.scss']
})
export class TourPreviewComponent implements OnInit {

  @Input() tour!: TourDto; // ! to indicate definite assignment

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

}
