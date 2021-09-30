import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  
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


  @Input() lista_productos: Producto[]=[];
  @Input() totalCarritoProducto: number=0;
  mensaje:string="Mensaje desde Hijo"

  @Output() accionModal = new EventEmitter<string>();
  //constructor(){}
  /**/ 
  constructor(private productosServiceM: ProductosService){}
  

  recibirRestarJuego(item:Producto):void {
    this.productosServiceM.recibirRestarJuego.emit(item);
  }
  /**/
  pagarCarritoM():void{
    this.productosServiceM.recibirPagarCarrito.emit();
  }
  enviarDatos(){
    //this.accionModal.emit(this.mensaje);
    this.accionModal.emit();
  }

  ngOnInit(): void {
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

  

}
