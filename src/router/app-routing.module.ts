import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "../pages/landing-page/landing-page.component";
import {NotFoundPageComponent} from "../pages/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
