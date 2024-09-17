import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})

export class HeroSectionComponent {

  constructor() {}

  private scrollByAmount(amount: number, duration: number): void {
    const start = window.scrollY || window.scrollY;
    const end = start + amount;
    const change = end - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress does not exceed 1

      window.scrollTo(0, start + change * this.easeInOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }

  private easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  // Define bookNowOnClick as an arrow function
  bookNowOnClick = (): void => {

    const scrollAmount = 855 - window.scrollY; // Adjust the amount to scroll (in pixels)
    const duration = 175; // Duration in milliseconds (adjust for speed)
    this.scrollByAmount(scrollAmount, duration);
  };

  public currentDisplayedIndex: number = 0;
  private scrollOffset = 65;
  public isThresholdPassed: boolean = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.isThresholdPassed = scrollPosition > this.scrollOffset;
  }


  texts: string[] = [
    'Where you can explore the enchanting Adriatic Sea and historic charm.',
    'I got bigg bals in this bih.',
    'Mole vas Cicvanic i sinovi',
    'Dodjite ameri molem vas',
    'Because I got it on me , u can run up if u want'
  ];


}
