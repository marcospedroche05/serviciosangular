import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personas',
  standalone: false,
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: ServicePersonas){}

  ngOnInit(): void {
    this._service.getPersonas().subscribe(response => {
      console.log("leyendo");
      this.personas = response;
    })
  }
}
