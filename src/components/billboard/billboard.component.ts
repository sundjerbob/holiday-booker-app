import { Component, Input, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

  @Input() currentDisplayedIndex?: number;
  protected imgUrlBase: string = '/assets/hero_section/screen';
  protected billboardLength = 5;
  protected imgRatio = 0.75;
  protected indexOffset = 0;

  public imageIndices: number[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeImageIndices();
    }
  }

  private initializeImageIndices() {
    this.imageIndices = Array.from({ length: this.billboardLength }, (_, i) => i);
  }
}
