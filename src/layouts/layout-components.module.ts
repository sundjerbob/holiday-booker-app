import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ComponentsModule} from "../components/components.module";
import {BasicOfferComponent} from "./basic-offer/basic-offer.component";
import {TopNavigationComponent} from "./navigation/top-navigation.component";
import {ActionButtonComponent} from "../components/action-button/action-button.component";
import {ReservationSearchComponent} from "./reservation-search/reservation-search.component";
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FooterComponent} from './footer/footer.component';
import {ItemGridComponent} from './item-grid/item-grid.component';


@NgModule(
  {
    imports: [
      CommonModule,
      ComponentsModule,
      NgOptimizedImage
    ],

    declarations: [
      TopNavigationComponent,
      HeroSectionComponent,
      BasicOfferComponent,
      ActionButtonComponent,
      ReservationSearchComponent,
      ContactUsComponent,
      FooterComponent,
      ItemGridComponent

    ],

    exports: [
      TopNavigationComponent,
      HeroSectionComponent,
      BasicOfferComponent,
      ActionButtonComponent,
      ReservationSearchComponent,
      ContactUsComponent,
      FooterComponent,
      ItemGridComponent

    ]
  }
)

export class LayoutComponentsModule {
}
