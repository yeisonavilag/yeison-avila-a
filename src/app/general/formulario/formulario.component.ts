import { Component, OnInit, Input, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* VARIABLES */
  pais: string="";
  region: string="";
  ciudad: string="";
  calle: string="";
  codigoPostal: string="";
  tipoTarjeta: string="";
  nombreTarjeta: string="";
  numSeguridad: number=0;
  mesExpiracion: number=0;
  anioExpiracion: number=0;

  @Input() carritoProductosM: Producto[]=[];
  @Input() totalCarritoProducto: number=0;

  constructor(private productosServiceF: ProductosService){}

  recibirRestarJuego(item:Producto):void {
    this.productosServiceF.recibirRestarJuego.emit(item);
  }
  /**/
  pagarCarritoM():void{
    this.productosServiceF.recibirPagarCarrito.emit();
  }

  insertarFormulario(): void{
    console.log("País: ",this.pais);
    console.log("region: ",this.region);
    console.log("ciudad: ",this.ciudad);
    console.log("calle: ",this.calle);
    console.log("codigoPostal: ",this.codigoPostal);
    console.log("tipoTarjeta: ",this.tipoTarjeta);
    console.log("nombreTarjeta: ",this.nombreTarjeta);
    console.log("numSeguridad: ",this.numSeguridad);
    console.log("mesExpiracion: ",this.mesExpiracion);
    console.log("añoExpiracion: ",this.anioExpiracion);
    
  }

  capturarCarrito(item: any): void {
    console.log("recibiendo mensaje...", item);
    this.carritoProductosM=item;
  }


  pagarCarrito(){
    console.log("carrito", this.carritoProductosM);
  }

  restarJuego(item: Producto){
    
  }
  

  ngOnInit(): void {
  }


}
