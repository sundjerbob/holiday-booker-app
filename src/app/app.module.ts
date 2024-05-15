import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from '../router/app-routing.module';
import { AppRootComponent } from './root-component/app-root.component';
import {PagesModule} from "../pages/pages.module";

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
