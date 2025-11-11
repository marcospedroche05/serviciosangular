import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaComponent } from './components/plantilla.component/plantilla.component';
import { PlantillamultipleComponent } from './components/plantillamultiple.component/plantillamultiple.component';

const routes: Routes = [
  {path: "plantilla", component: PlantillaComponent},
  {path: "plantillamultiple", component: PlantillamultipleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
