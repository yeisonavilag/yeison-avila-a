import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { NoEncontradaComponent } from './no-encontrada/no-encontrada.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component'; // <-- import the module
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { FormularioComponent } from './formulario/formulario.component';

import { ProductosPipe } from '../pipe/productos.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    NoEncontradaComponent,
    PruebasComponent,
    ProductosComponent,
    CategoriaComponent,
    IngresoProductoComponent,
    ProductosPipe,
    ModalComponent,
    FormularioComponent
  ],
  exports:[
    HomeComponent,
    NoEncontradaComponent,
    PruebasComponent,
    ProductosComponent,
    CategoriaComponent,
    IngresoProductoComponent,
    ProductosPipe,
    ModalComponent,
    FormularioComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class GeneralModule { }
