import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ComponentsModule} from "../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule
    ],
    declarations: [
        HeroSectionComponent
    ],
    exports: [
        HeroSectionComponent
    ]
})
export class LayoutComponentsModule { }
