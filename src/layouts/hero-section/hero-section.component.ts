import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {


  texts: string[] = [
    'Where you can explore the enchanting Adriatic Sea and historic charm.',
    'Where you can explore the enchanting Adriatic Sea and historic charm.',
    'Mole vas Cicvanic i sinovi',
    'Dodjite ameri molem vas',
    'Because I got it on me , u can run up if u want'
  ];

  // ovo index je slide show
  public currentDisplayedIndex: number = 0;


  private searchScrollOffset = 2; // New offset value
  public isThresholdPassed: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    let yScroll  = window.scrollY || document.documentElement.scrollTop || 0;
    this.isThresholdPassed = yScroll > this.searchScrollOffset;
    if(this.isThresholdPassed)
      console.log('beboribeboribebo');
  }
}
