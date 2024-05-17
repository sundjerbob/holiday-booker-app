import {Component, Input} from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: "app-billboard-component",
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


export class BillboardComponent {

  @Input() images?: string[];

  @Input() currentDisplayedIndex?: number;

  @Input() widths?: number[];

  @Input() heights?: number[];

  @Input() zoomRatio?: number[];


  public getWidthForImage(index: number): number {
    return this.widths === undefined || this.zoomRatio === undefined ? 1 : this.widths[index] * this.zoomRatio[index];
  }


  public getHeightForImage(index: number): number {
    return this.heights === undefined || this.zoomRatio == undefined ? 1 : this.heights[index] * this.zoomRatio[index];
  }

}
