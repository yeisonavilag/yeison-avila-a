import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {

  //lista_productos: Lista_Productos = {};
  productos: Producto[] =[];
  carritoProductos: Producto[]=[];

  //se crea producto base, para evitar que variable sea null
  juego: Producto[]=[{
    "id": 0,
    "nombre": "",
    "plataforma": "",
    "descripcion": "",
    "precio": 0,
    "img": ""
}]
  
//se crea base de variable id del carritoProducto , para evitar que variable sea null
  idRestar:number=0;

  constructor(public productosService: ProductosService) {

  }


  agregarJuego():void{
    console.log("funcion Agregar, Juego: ",this.juego[0]);
    console.log("largo Producto[]: Juego: ",this.juego.length);
    let idproducto=this.juego.length-1;
    
    if(this.juego!=null){
      this.carritoProductos.push(this.juego[idproducto]);
      console.log("Juego Agregado: "+this.juego[idproducto].nombre+
      " ,id: "+this.juego[idproducto].id);
    }
    console.log("largo Producto[]: Juego: ",this.juego.length);
    console.log("largo carritoProductos: Juego: ",this.carritoProductos.length);
    console.log("------");
  }
  /*
  agregarJuego(idJuego: number):void{
    console.log("funcion Agregar, Juego: ",this.juego);
    if(this.juego!=null){
      this.carritoProductos.push(this.juego);
      console.log("Juego Agregado: "+this.juego.nombre+" ,id: "+this.juego.id)
    }
  }
  */

//Metodo restar Juego
restarJuego():void{
    let i=0;
    //mostrar id de carritoProductos a eliminar
    console.log("Juego a retirar:", this.idRestar);
    console.log("Largo carritoProductos: ",this.carritoProductos.length);
    
    for(i=0;i<this.carritoProductos.length;i++){
        //Si idRestar que debe ser presionado desde HTML se encuentra, retira dicho elemento
        if(this.carritoProductos[i].id==this.idRestar){
            console.log("Juego a retirar: "+this.carritoProductos[i].nombre+" ,id: "+this.idRestar);
            this.carritoProductos.splice(this.idRestar,1);
            console.log("retirado");
            break;
        }
    }
    //Mensajes en consola para validar funcionamiento
    console.log("Largo carritoProductos: ",this.carritoProductos.length);
    console.log("------");
    
}

  
}
