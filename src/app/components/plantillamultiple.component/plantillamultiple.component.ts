import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantillamultiple.component',
  standalone: false,
  templateUrl: './plantillamultiple.component.html',
  styleUrl: './plantillamultiple.component.css',
})
export class PlantillamultipleComponent implements OnInit{
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;
  public funcionesElegidas!: Array<string>;
  @ViewChild("funcion") funcion!: ElementRef

  constructor(private _service: ServicePlantillas) {}

  ngOnInit(): void {
      this._service.getFunciones().then(response => {
        this.funciones = response;
      })
  }

  buscaEmpleados(): void {
    let aux = new Array<string>();
    for (var option of this.funcion.nativeElement.options) {
      if(option.selected) 
        aux.push(option.value);
    }
    this.funcionesElegidas = aux;
    this._service.getPlantillaFunciones(this.funcionesElegidas).then(response => {
      this.plantilla = response;
    })
  }
}
