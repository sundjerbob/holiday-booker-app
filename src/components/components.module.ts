import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LightSwitchComponent} from './light-switch/light-switch.component';

import {BillboardComponent} from "./billboard/billboard.component";
import {TextWriterComponent} from "./text-billboard/text-writer/text-writer.component";
import {TextBillboardComponent} from "./text-billboard/text-billboard.component";
import {TourPreviewComponent} from './tour-preview/tour-preview.component';
import {TourItemComponent} from './tour-item/tour-item.component';
import {PreviewModalComponent} from './preview-modal/preview-modal.component';

@NgModule({

  imports: [CommonModule, NgOptimizedImage],

  declarations: [
    LightSwitchComponent,
    BillboardComponent,
    TextWriterComponent,
    TextBillboardComponent,
    TourPreviewComponent,
    TourItemComponent,
    PreviewModalComponent
  ],


  exports: [
    LightSwitchComponent,
    BillboardComponent,
    TextWriterComponent,
    TextBillboardComponent,
    TourPreviewComponent,
    TourItemComponent,
    PreviewModalComponent
  ]
})

export class ComponentsModule {
}
