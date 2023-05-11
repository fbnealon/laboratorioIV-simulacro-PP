import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {

  @Input() listaRecibida?: Pelicula[];
  @Output() detallarPelicula:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();


  constructor() { }

  seleccionarPelicula(pelicula:Pelicula)
  {
    this.detallarPelicula.emit(pelicula);
    console.info("En listado", pelicula);
  }
}
