import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasComponent } from './components/personas.component/personas.component';
import { ServicePersonas } from './services/service.personas';
import { Personasstandalone } from './components/personasstandalone/personasstandalone';

@NgModule({
  declarations: [
    App,
    PersonasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Personasstandalone,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas
  ],
  bootstrap: [App]
})
export class AppModule { }
