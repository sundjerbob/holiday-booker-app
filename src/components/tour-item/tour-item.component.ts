/* tour-item.component.ts */
import {Component, Input} from '@angular/core';
import {TourDto} from "../../dtos/tour/tour.dto";

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrl: './tour-item.component.scss'
})
export class TourItemComponent {

  @Input() tour!: TourDto;

}
