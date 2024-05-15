import {Component, Input} from "@angular/core";

@Component({
  selector: "app-billboard-component",
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})

export class BillboardComponent {

  // The input array of strings, each representing a different image url
  @Input() images: string[] = [];

  // The index of the currently displayed div.
  // This is set to be changeable from outside the component
  @Input() currentDisplayedIndex: number = 0;
}
