import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightSwitchComponent} from './light-switch/light-switch.component';
import {TopNavigationComponent} from "./top-navigation/top-navigation.component";
import {BillboardComponent} from "./billboard/billboard.component";

@NgModule({
    declarations: [
      LightSwitchComponent,
      TopNavigationComponent,
      BillboardComponent
    ],
    imports: [CommonModule],
    exports: [
        LightSwitchComponent,
        TopNavigationComponent,
        BillboardComponent
    ]
})

export class ComponentsModule {
}
