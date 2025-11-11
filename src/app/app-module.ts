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
import { MenuComponent } from './components/menu.component/menu.component';
import { PlantillaComponent } from './components/plantilla.component/plantilla.component';
import { ServicePlantillas } from './services/service.plantillas';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    PersonasComponent,
    CochesComponent,
    MenuComponent,
    PlantillaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Personasstandalone,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantillas
  ],
  bootstrap: [App]
})
export class AppModule { }
