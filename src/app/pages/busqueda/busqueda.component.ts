import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  listadoPeliculas: Pelicula[];
  peliculaActiva?: Pelicula;
  comoVer: string;
  claseDeBoton: string;

  constructor() {
    this.comoVer = 'Tabla';
    this.claseDeBoton = 'btn-danger';
    this.listadoPeliculas = [new Pelicula(1, "Argentina 1985", "Drama", "05/04/2023", 1500000, "../../assets/Argentina1985.jpg", new Actor(1, "Ricardo", "Darin", "66", "Masculino", "Argentina", "Argentina")),
                            new Pelicula(2, "Super Mario Bros", "Infantil", "05/04/2023", 3000000, "../../assets/SuperMarioBros.jpg", new Actor(2, "Chris", "Pratt", "43", "Masculino", "USA", "USA")),
                            new Pelicula(3, "Star Wars: Una Nueva Esperanza", "Sci-Fi", "25/12/1977", 7000000, "../../assets/StarWarsANewHope.jpg", new Actor(3, "Mark", "Hamill", "71", "Masculino", "USA", "USA"))];
  }

  TomarPeliculaSeleccionada($event: Pelicula) {
    this.peliculaActiva = $event;
    console.info($event);
  }

  CambiarLaVista() {
    // tslint:disable-next-line: triple-equals
    if (this.comoVer == 'Tabla') {
       this.comoVer = 'Listado';
       this.claseDeBoton = 'btn-info';
    } else {
       this.comoVer = 'Tabla';
       this.claseDeBoton = 'btn-danger';
    }
  }
}
