import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  @Input() listaRecibida?:Pelicula [];
  @Output() detallarPelicula:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  constructor() {}

  seleccionarPelicula(pelicula:Pelicula)
  {
    this.detallarPelicula.emit(pelicula);
    console.info("En listado", pelicula);
  }
}
