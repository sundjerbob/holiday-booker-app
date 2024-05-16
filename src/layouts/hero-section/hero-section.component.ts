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

 public currentDisplayedIndex: number = 0;
}

