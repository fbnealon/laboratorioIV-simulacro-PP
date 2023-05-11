import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiCountriesService } from 'src/app/services/api-countries.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent{

  @Output() enviamosUnPais: EventEmitter<any> = new EventEmitter<any>();
  listadoPaises: any =[];

  constructor(private apiCountries: ApiCountriesService) {
    this.listadoPaises = [];
  }

  ngOnInit(): void {
    this.obtenerListadoPaises();
  }

  obtenerListadoPaises() {
    this.apiCountries.traerPaises().subscribe((val:any) => {
      for(let item of val) {
        this.listadoPaises.push(item);
      }
      this.listadoPaises.sort((a: any, b: any) => {
        return a.name.common.localeCompare(b.name.common);
      });
    })
    // console.log(this.listadoPaises);
  }

 enviarUnPais(pais: any) {
   this.enviamosUnPais.emit(pais);
  //  console.log(pais);
}
}
