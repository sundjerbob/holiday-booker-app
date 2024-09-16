import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LightSwitchComponent} from './light-switch/light-switch.component';

import {BillboardComponent} from "./billboard/billboard.component";
import {TextWriterComponent} from "./text-billboard/text-writer/text-writer.component";
import {TextBillboardComponent} from "./text-billboard/text-billboard.component";

@NgModule({

  imports: [CommonModule, NgOptimizedImage],

  declarations: [
    LightSwitchComponent,
    BillboardComponent,
    TextWriterComponent,
    TextBillboardComponent
  ],


  exports: [
    LightSwitchComponent,
    BillboardComponent,
    TextWriterComponent,
    TextBillboardComponent
  ]
})

export class ComponentsModule {
}
