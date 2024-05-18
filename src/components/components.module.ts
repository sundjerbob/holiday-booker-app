import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightSwitchComponent} from './light-switch/light-switch.component';
import {TopNavigationComponent} from "./top-navigation/top-navigation.component";
import {BillboardComponent} from "./billboard/billboard.component";
import {TextWriterComponent} from "./text-billboard/text-writer/text-writer.component";
import {TextBillboardComponent} from "./text-billboard/text-billboard.component";

@NgModule({
  declarations: [
    LightSwitchComponent,
    TopNavigationComponent,
    BillboardComponent,
    TextWriterComponent,
    TextBillboardComponent
  ],
  imports: [CommonModule],
  exports: [
    LightSwitchComponent,
    TopNavigationComponent,
    BillboardComponent,
    TextWriterComponent,
    TextBillboardComponent
  ]
})

export class ComponentsModule {
}
