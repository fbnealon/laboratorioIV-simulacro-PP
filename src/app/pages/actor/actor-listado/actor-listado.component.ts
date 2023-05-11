import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent {

  @Input() listaRecibida?: Actor[];
  @Output() detallarActor:EventEmitter<Actor> = new EventEmitter<Actor>();


  constructor() { }

  seleccionarActor(actor:Actor)
  {
    this.detallarActor.emit(actor);
    console.info("En listado", actor);
  }
}
