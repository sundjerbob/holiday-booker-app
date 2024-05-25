import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {


  texts: string[] = [
    'Dodjite u CE Ge ',
    'Najboljse se mece u dvie ',
    'Iljade trece , apartmani , aAAAAAAAAAAAAAAAAAa aaaa jel moguce /??',
    'Gospodi pomiluj',
    'skituljko...'
  ];

  public currentDisplayedIndex: number = 0;
}
