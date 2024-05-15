import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from '../app.module';
import { AppRootComponent } from '../root-component/app-root.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppRootComponent],
})
export class AppServerModule {}
