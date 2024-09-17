import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ComponentsModule} from "../components/components.module";
import {BasicOfferComponent} from "./basic-offer/basic-offer.component";
import {TopNavigationComponent} from "./navigation/top-navigation.component";
import {ActionButtonComponent} from "../components/action-button/action-button.component";
import {ReservationSearchComponent} from "./reservation-search/reservation-search.component";
import { ContactUsComponent } from './contact-us/contact-us.component';

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
    ReservationSearchComponent,
    ContactUsComponent

  ],
  exports: [
    TopNavigationComponent,
    HeroSectionComponent,
    BasicOfferComponent,
    ActionButtonComponent,
    ReservationSearchComponent,
    ContactUsComponent

  ]
})

export class LayoutComponentsModule {
}
