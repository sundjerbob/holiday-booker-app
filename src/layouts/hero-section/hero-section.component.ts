import {Component} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {


  texts: string[] = [
    'Where you can explore the enchanting Adriatic Sea and historic charm.',
    'Where you can explore the enchanting Adriatic Sea and historic charm.',
    'Mole vas Cicvanic i sinovi.',
    'Dodjite ameri molem vas',
    'Because I got it on me , u can run up if u want'
  ];

  public currentDisplayedIndex: number = 0;
}
