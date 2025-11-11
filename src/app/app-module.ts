import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasComponent } from './components/personas.component/personas.component';
import { ServicePersonas } from './services/service.personas';
import { Personasstandalone } from './components/personasstandalone/personasstandalone';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches.component/coches.component';

@NgModule({
  declarations: [
    App,
    PersonasComponent,
    CochesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Personasstandalone,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches
  ],
  bootstrap: [App]
})
export class AppModule { }
