import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {LayoutComponentsModule} from "../layouts/layout-components.module";

@NgModule({
  declarations: [
    LandingPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    LayoutComponentsModule,
  ],
  exports: [
    LandingPageComponent,
    NotFoundPageComponent
  ]
})

export class PagesModule {
}
