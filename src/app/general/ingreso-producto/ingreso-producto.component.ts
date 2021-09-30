import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-producto',
  templateUrl: './ingreso-producto.component.html',
  styleUrls: ['./ingreso-producto.component.css']
})
export class IngresoProductoComponent {

  codigo: number | null=0;
  nombre: string| null="";
  precio: number | null=0;
  stock: number| null=0;
  

  insertarProducto():void{
    console.log("Metodo Insertar ...");
    console.log("Codigo: "+this.codigo);
    console.log("Nombre: "+this.nombre);
    console.log("Precio: "+this.precio);
    console.log("Stock: "+this.stock);
    
  }

}
