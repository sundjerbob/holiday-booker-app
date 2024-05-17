import {Component} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  images: string[] = [
    '/assets/screen3.jpg',
    '/assets/screen4.jpg',
    '/assets/screen5.jpg',
    '/assets/screen6.jpg',
    '/assets/screen7.jpg',
  ];

  widths: number[] = [600, 300, 366, 387, 460];
  heights: number[] = [400, 200, 274, 259, 307];
  zoomRatio: number[] = [1.7, 2.5, 3.5, 1.7, 1.5];


  public currentDisplayedIndex: number = 0;
}

