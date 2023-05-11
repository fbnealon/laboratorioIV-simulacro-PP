import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pages/peliculas/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { AltaActoresComponent } from './pages/alta-actores/alta-actores.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActorListadoComponent } from './pages/actor/actor-listado/actor-listado.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat'; //muy importante para que no rompa

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaActoresComponent,
    TablaPaisesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [HttpClient, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
