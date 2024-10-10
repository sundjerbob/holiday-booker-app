import {Component, HostListener} from '@angular/core';
import {TourService} from "../../services/tour.service";
import {TourDto} from "../../dtos/tour/tour.dto";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {

  public tours: TourDto[] = [];

  constructor(tourService: TourService) {
    tourService.getTours().subscribe((value: TourDto[]) => {
        this.tours = value;
      }
    );
  }


}
