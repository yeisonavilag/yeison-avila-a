import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { LoginComponent } from './general/login/login.component';
import { NoEncontradaComponent } from './general/no-encontrada/no-encontrada.component';
import { ProductosComponent } from './general/productos/productos.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';
import { RegistroComponent } from './general/registro/registro.component';

//referencia a los comopnentes
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'ingresar', component: LoginComponent},
  { path: 'registrar', component: RegistroComponent},
  { path: 'pruebas', component: PruebasComponent},
  { path: 'productos', component: ProductosComponent},

  { path: '404', component: NoEncontradaComponent},
  { path: '**', redirectTo: '404' },

  
];

//decorador: no olvidar importarlo
@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
