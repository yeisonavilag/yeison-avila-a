import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-productos',
  template: `<div>
        <input type="text" [(ngModel)]="term">
        <div *ngFor = "let item of items |filter:term" >
          <p>
            {{item.name}}
          </p>
        </div>
    </div>
    <ul>
      <li *ngFor="let item of collection | paginate: { itemsPerPage: 4, currentPage: p }"> ... </li>
    </ul>      
    <pagination-controls (pageChange)="p = $event"></pagination-controls>`,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  /* VARIABLES */
  productos: Producto[] =[];
  carritoProductos: Producto[]=[];
  totalCarritoProducto: number=0;
  flagAgregar=0;
  pagina: number = 0;
  buscar: any;
  p: number = 1;

  //se crea producto base, para evitar que variable sea null
  juego: Producto[]=[{
    "id": 0,
    "nombre": "",
    "plataforma": "",
    "descripcion": "",
    "precio": 0,
    "img": "",
    "cantidad":0
}]
  
  //se crea base de variable id del carritoProducto , para evitar que variable sea null
  idRestar:number=0;

  //Constructor
  constructor(public productosService: ProductosService) {  }

  /* METODOS */
  //Metodo Agregar Producto "Juego"
  agregarJuego(item: Producto):void{
    if(this.existeProducto(item)){
      this.carritoProductos[this.flagAgregar].cantidad++;
      console.log("this.carritos: ",this.carritoProductos);
     
    }else{
      item.cantidad=1;
      this.carritoProductos.push(item);
    }
    this.flagAgregar=0;
    this.totalCarritoProd();
  }

  existeProducto(item: Producto): boolean{
    for(let i=0;i<this.carritoProductos.length;i++){
      if(this.carritoProductos[i].id==item.id){
        console.log("Producto Existe");
        this.flagAgregar=i;
        return true;
      }
    }
    console.log("Producto No Existe");
    return false;
  }

  //Metodo Restar Producto "Juego"
  public restarJuego(item: Producto):void{
      if(this.existeMasProducto(item)){
      }
      this.totalCarritoProd();
  }

  existeMasProducto(item: Producto): boolean{
    for(let i=0;i<this.carritoProductos.length;i++){
      if(this.carritoProductos[i].id==item.id){
        console.log("Producto Existe");
        if(this.carritoProductos[i].cantidad>1){
          this.carritoProductos[i].cantidad--;
        }else{
          this.carritoProductos.splice((i),1);
        }
        this.flagAgregar=i;
        return true;
      }
    }
    console.log("Producto No Existe");
    return false;
  }

  public recibirRestarJuego($event: Producto):void{
    this.restarJuego($event);
  }

  totalCarritoProd(){
    this.totalCarritoProducto=0;
    for(let i=0;i<this.carritoProductos.length;i++){
      this.totalCarritoProducto= this.totalCarritoProducto 
      + ((this.carritoProductos[i].cantidad)*(this.carritoProductos[i].precio));
    }
  }

  pagarCarrito(){
    if(this.totalCarritoProducto>0){
      alert("Pagado");
    }
  }

  public recibirPagarCarrito():void{
    console.log("recibiendo mensaje hijo");
    this.pagarCarrito();
  }

  capturarVariable(mensaje: any): void {
    console.log("recibiendo mensaje...", mensaje);
    }

  ngOnInit():void{
    this.productosService.recibirRestarJuego.subscribe(data => {
      this.restarJuego(data);
      console.log("data carrito: ",data);
    })
  }


}
