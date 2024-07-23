import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LightSwitchComponent} from './light-switch/light-switch.component';
import {TopNavigationComponent} from "./navigation/top-navigation.component";
import {BillboardComponent} from "./billboard/billboard.component";
import {TextWriterComponent} from "./text-billboard/text-writer/text-writer.component";
import {TextBillboardComponent} from "./text-billboard/text-billboard.component";
import {ReservationSearchComponent} from './reservation-search/reservation-search.component';
import {BasicOfferComponent} from './basic-offer/basic-offer.component';

@NgModule({
  declarations: [
    LightSwitchComponent,
    TopNavigationComponent,
    BillboardComponent,
    TextWriterComponent,
    TextBillboardComponent,
    ReservationSearchComponent,
    BasicOfferComponent
  ],
  imports: [CommonModule, NgOptimizedImage],
    exports: [
        LightSwitchComponent,
        TopNavigationComponent,
        BillboardComponent,
        TextWriterComponent,
        TextBillboardComponent,
        ReservationSearchComponent,
        BasicOfferComponent
    ]
})

export class ComponentsModule {
}
