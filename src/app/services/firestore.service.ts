import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private af: AngularFirestore) { }

  guardarActor(actorGuardar: any) 
  { 

    let actor = {
      id: actorGuardar.id,
      nombre: actorGuardar.nombre,
      apellido: actorGuardar.apellido,
      edad: actorGuardar.edad,
      sexo: actorGuardar.sexo,
      nombrePais: actorGuardar.nombrePais,
      banderaPais: actorGuardar.banderaPais,
    };
    this.af.collection<any>('actores').add(actor);
  }



  guardarPelicula(peliculaGuardar: any) 
  {
    let pelicula = {
      id: peliculaGuardar.id,
      nombre: peliculaGuardar.nombre,
      tipo: peliculaGuardar.tipo,
      fechaDeEstreno: peliculaGuardar.fechaDeEstreno,
      cantidadPublico: peliculaGuardar.cantidadPublico,
      fotoPelicula: peliculaGuardar.fotoPelicula,
      actor: peliculaGuardar.actor,
    };

    this.af.collection<any>('peliculas').add(pelicula);
  }


  traerListaActores() 
  {
    let collection = this.af.collection<any>('actores');
    return collection.valueChanges();
  }
  traerListaPeliculas() 
  {
    let collection = this.af.collection<any>('peliculas');
    return collection.valueChanges();
  }
}