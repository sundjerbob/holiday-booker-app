import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-billboard',
  templateUrl: './text-billboard.component.html',
  styleUrls: ['./text-billboard.component.scss']
})

export class TextBillboardComponent {
  @Input() texts?: string[];
  @Input() currentDisplayedIndex: number = 0;
}

export default TextBillboardComponent;
