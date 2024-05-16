import {Component, Input} from "@angular/core";

@Component({
  selector: "app-billboard-component",
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})

export class BillboardComponent {

  @Input() images?: string[];

  @Input() currentDisplayedIndex?: number;
}
