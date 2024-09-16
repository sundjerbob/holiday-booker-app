import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor() {
    console.log('HeroSectionComponent constructor');
  }

  ngOnInit(): void {
    console.log('HeroSectionComponent ngOnInit');
  }

  texts: string[] = [
    'Where you can explore the enchanting Adriatic Sea and historic charm.',
    'Where you can explore the enchanting Adriatic Sea and historic charm.',
    'Mole vas Cicvanic i sinovi',
    'Dodjite ameri molem vas',
    'Because I got it on me , u can run up if u want'
  ];

  // ovo index je slide show
  public currentDisplayedIndex: number = 0;


  private scrollOffset = 50; //scroll offset value
  public isThresholdPassed: boolean = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.isThresholdPassed = scrollPosition > this.scrollOffset;
    // DEBUG
    // console.log('Scroll position:', scrollPosition, 'Threshold passed:', this.isThresholdPassed);
  }

}
