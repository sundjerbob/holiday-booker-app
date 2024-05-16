import {Component, Input} from "@angular/core";

@Component({
  selector: "app-billboard-component",
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
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
