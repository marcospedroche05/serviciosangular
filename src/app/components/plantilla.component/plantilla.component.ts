import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla.component',
  standalone: false,
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.css',
})
export class PlantillaComponent implements OnInit {
  public funciones!: Array<string>;
  public funcionElegida!: string;
  public plantilla!: Array<Plantilla>;
  @ViewChild("funcion") funcion!: ElementRef

  constructor(private _service: ServicePlantillas){}

  ngOnInit(): void {
      this._service.getFunciones().then(response => {
        this.funciones = response;
      })
  }

  buscaEmpleados(): void {
    this.funcionElegida = this.funcion.nativeElement.value;

    this._service.getEmpleados(this.funcionElegida).then(response => {
       this.plantilla = response;
     })
  }

}
