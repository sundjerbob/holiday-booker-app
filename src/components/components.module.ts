import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightSwitchComponent} from './light-switch/light-switch.component';

@NgModule({
    declarations: [LightSwitchComponent],
    imports: [CommonModule],
    exports: [LightSwitchComponent]
})

export class ComponentsModule {
}
