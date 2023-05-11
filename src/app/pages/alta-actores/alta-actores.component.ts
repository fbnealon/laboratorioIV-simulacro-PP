import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent {
  actorNuevo : Actor = new Actor(0, '', '', '', '', '', '');
  forma! : FormGroup;
  mostrar : boolean = false;
  titulo : string = "Mostrar listado";
  actores : any;

  constructor(private fb : FormBuilder, private fs : FirestoreService){

    this.fs.traerListaActores().subscribe((actores) => {
      if (actores != null) {
        this.actores = actores;
      }
    });

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required],
      'nombrePais': ['', Validators.required],
      'banderaPais': ['', [Validators.required]]
    });

    console.info(this.actores);

  }

  obtenerPaisSeleccionado($events : any)
  {
    this.actorNuevo.nombrePais = $events.name.common;
    this.actorNuevo.banderaPais = $events.flags.png;
  }

   aceptar(): void {
    if(this.forma)
    console.log(this.forma.getRawValue());
  }

  guardarActor($event:any)
  {
    $event.preventDefault();
    if (this.validar()) {
      this.fs.guardarActor(this.actorNuevo);
      console.log(this.actores);
      this.actorNuevo = new Actor(0, '', '', '', '', '', '');
     }
  }

  validar()
  {
    let resultado : boolean = true;
    if (this.actorNuevo.apellido === '' ||
        this.actorNuevo.nombre === '' ||
        this.actorNuevo.edad === '' ||
        this.actorNuevo.banderaPais === '' ||
        this.actorNuevo.nombrePais === ''||
        this.actorNuevo.sexo === ''
    )
    { 
      resultado = false;
      Swal.fire(
        {
        title: "Error",
        text:"Complete todos los campos para registrar",
        icon : "error",
        confirmButtonText : 'Ok'
        }
      )
    }
    console.log(this.actorNuevo);
    return resultado;
  }
  
MostrarListado()
  {
    if (this.mostrar) {
      this.titulo = "Mostrar listado";
      this.mostrar = false;
    }
    else
    {

      this.titulo = "Cerrar listado";
      this.mostrar = true;
     }
   }


}
