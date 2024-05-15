import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightSwitchComponent} from './light-switch/light-switch.component';
import {TopNavigationComponent} from "./top-navigation/top-navigation.component";

@NgModule({
    declarations: [
      LightSwitchComponent,
      TopNavigationComponent,
    ],
    imports: [CommonModule],
  exports: [
    LightSwitchComponent,
    TopNavigationComponent]
})

export class ComponentsModule {
}
