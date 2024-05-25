import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  images: string[] = [
    '/assets/screen3.jpg',
    '/assets/screen4.jpg',
    '/assets/screen5.jpg',
    '/assets/screen6.jpg',
    '/assets/screen7.jpg',
  ];

  texts: string[] = [
    'Dodjite u CE Ge ',
    'Najboljse se mece u dvie ',
    'Iljade trece , apartmani , aAAAAAAAAAAAAAAAAAa aaaa jel moguce /??',
    'Gospodi pomiluj',
    'skituljko...'
  ];

  public currentDisplayedIndex: number = 0;
}
