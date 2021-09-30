import { HttpClient } from '@angular/common/http';
import {Injectable, Output, Input, EventEmitter} from '@angular/core';
import { Lista_Productos, Producto } from '../interfaces/producto.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductosService {
    url: string="assets/data/productos.json";
    url2: string="https://learsixela.github.io/productos_json/productos.json";
    urlJuegos: string="assets/data/juegos.json";
    
    //lista_productos: Lista_Productos = {};
    productos: Producto[] =[];

    @Output() recibirRestarJuego: EventEmitter<Producto>= new EventEmitter();
    @Output() recibirPagarCarrito = new EventEmitter();

    constructor(private http: HttpClient){
        console.log("ProductosService");
        this.cargarProductos();
    }    
    
    public cargarProductos(){
        console.log("Metodo cargar Productos");
        this.http.get(this.urlJuegos).subscribe(
             (respuesta: Producto | any) => {
            this.productos=respuesta.productos;
            console.log("Respuesta: ", this.productos);
        });
    }

    getProductoId(producto: Producto[]){
        console.log("Producto: ",producto);
        return producto[0].id;
    }

}

