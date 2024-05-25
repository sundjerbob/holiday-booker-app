import {Component, Input, OnInit, PLATFORM_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-billboard-component',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
  animations: [
    trigger('imgState', [
      state('off', style({
        transform: 'translateX(-50%)',
        filter: 'blur(10px)',
        opacity: 0,
        visibility: 'hidden'
      })),
      state('on', style({
        transform: 'translateX(0)',
        filter: 'blur(0)',
        opacity: 1,
        visibility: 'visible'
      })),
      transition('off => on', [
        animate('0.5s ease-out')
      ]),
      transition('on => off', [
        animate('0.5s ease-out'),
      ])
    ])
  ]
})
export class BillboardComponent implements OnInit {

  /* drilled state variable */
  @Input() currentDisplayedIndex?: number;
  /* Don't change this */
  protected imgUrlBase: string = '/assets/screen';
  /* try to not change this since there is 5 buttons for nav */
  protected billboardLength = 5;


  /* CHANGE THOSE */
  /***********************************/
  /* Aspect ratio for images */
  protected imgRatio = 0.75;
  /* Offset the index for first image */
  protected indexOffset = 7;
  /***********************************/


  public widths: number[] = [];
  public heights: number[] = [];
  public ratios: number[] = [];
  public zoomRatio: number[] = [];
  public imageIndices: number[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeImageIndices();
      this.loadImageRatios();
    }
  }

  private initializeImageIndices() {
    this.imageIndices = Array.from({length: this.billboardLength}, (_, i) => i);
  }

  private loadImageRatios() {
    this.imageIndices.forEach((_, index) => {
      const imageSrc = `${this.imgUrlBase}${index + this.indexOffset}.jpg`;
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        this.ratios[index] = ratio;
        this.widths[index] = img.naturalWidth;
        this.heights[index] = img.naturalHeight;
        this.zoomRatio[index] = this.calculateZoomRatio(ratio);
        console.log(`Loaded image ${imageSrc} with ratio ${ratio}`); // Debugging log
      };
      img.onerror = () => {
        console.error(`Failed to load image ${imageSrc}`); // Error log
      };
    });
  }

  private calculateZoomRatio(ratio: number): number {
    // Example logic to determine zoom ratio, you can adjust this based on your requirements
    if (ratio > 1.5) return 2.0;
    if (ratio > 1.2) return 1.5;
    return 1.0;
  }

  public getWidthForImage(index: number): number {
    return this.widths[index] * this.zoomRatio[index] * this.imgRatio;
  }

  public getHeightForImage(index: number): number {
    return this.heights[index] * this.zoomRatio[index] * this.imgRatio;
  }
}
