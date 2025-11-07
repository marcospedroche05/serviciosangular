import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personasstandalone',
  standalone: true,
  templateUrl: './personasstandalone.html',
  styleUrl: './personasstandalone.css',
  providers: [ServicePersonas]
})
export class Personasstandalone implements OnInit{
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas){}
  ngOnInit(): void {
    this._service.getPersonas().subscribe(response => {
      console.log("leyendo");
      this.personas = response;
    })
  }
}
