import { Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-coches',
  standalone: false,
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css',
})
export class CochesComponent implements OnInit {
  public coches!: Array<Coche>;

  constructor(private _service: ServiceCoches){}

  ngOnInit(): void {
    // this._service.getCochesHttpClient().subscribe(result => {
    //   this.coches = result;
    // })
    this._service.getCoches().then(response => {
      this.coches = response;
    });
  }
  
}
