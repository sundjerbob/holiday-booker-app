import { Component, Input, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {animate, state, style, transition, trigger} from "@angular/animations";

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

  @Input() images?: string[];
  @Input() currentDisplayedIndex?: number;

  public widths: number[] = [];
  public heights: number[] = [];
  public ratios: number[] = [];
  public zoomRatio: number[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.images) {
      this.loadImageRatios();
    }
  }

  private loadImageRatios() {
    this.images?.forEach((imageSrc, index) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        this.ratios[index] = ratio;
        this.widths[index] = img.naturalWidth;
        this.heights[index] = img.naturalHeight;
        this.zoomRatio[index] = this.calculateZoomRatio(ratio);
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
    return this.widths[index] * this.zoomRatio[index];
  }

  public getHeightForImage(index: number): number {
    return this.heights[index] * this.zoomRatio[index];
  }
}
