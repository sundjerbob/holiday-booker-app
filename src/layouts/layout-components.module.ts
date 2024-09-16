import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ComponentsModule} from "../components/components.module";
import {BasicOfferComponent} from "./basic-offer/basic-offer.component";
import {TopNavigationComponent} from "./navigation/top-navigation.component";
import {ActionButtonComponent} from "../components/action-button/action-button.component";
import {ReservationSearchComponent} from "./reservation-search/reservation-search.component";

@NgModule({
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
    ReservationSearchComponent

  ],
  exports: [
    TopNavigationComponent,
    HeroSectionComponent,
    BasicOfferComponent,
    ActionButtonComponent,
    ReservationSearchComponent

  ]
})

export class LayoutComponentsModule {
}
