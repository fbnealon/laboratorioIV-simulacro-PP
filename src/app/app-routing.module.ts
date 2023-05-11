import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { ActorListadoComponent } from './pages/actor/actor-listado/actor-listado.component';
import { AltaActoresComponent } from './pages/alta-actores/alta-actores.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pages/peliculas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: 'bienvenido', component:BienvenidoComponent},
  {path: 'busqueda', component:BusquedaComponent},
  {path: '', component:BusquedaComponent},
  {path: 'peliculas/alta', component:PeliculaAltaComponent},
  {path: 'actor/alta', component:AltaActoresComponent},
  {path: 'actor/listado', component:ActorListadoComponent},
  {path: 'peliculas/listado', component:PeliculaListadoComponent},
  {path: 'paises/listado', component:TablaPaisesComponent},
  {path: '**', component:BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
