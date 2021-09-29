import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //declare variables
  categoria: Categoria = {};

  constructor(private http: HttpClient) { 
    console.log("Constructor CategoriaService");
    this.cargarCategorias_old();
    this.cargarCategorias_new();
    this.cargarCategoriasWeb();
  }

  private cargarCategorias_old(): void {
    console.log("Metodo Privado cargarCategorias");
    /*estructura base 
     this.http.get('url').subscribe( (respuesta) => { }) 
     */
    
    this.http.get('assets/data/categorias.json').subscribe( (respuesta: any) => {
      console.log("Respuesta Old: ", respuesta);
      console.log("Productos Old: ", respuesta['frutas']);
      //console.log("Pera Old: ", respuesta['frutas'][0]);
    });
    
  }

  private cargarCategorias_new(): void {
    console.log("Metodo Privado cargarCategorias");
    /*estructura base 
     this.http.get('url').subscribe( (respuesta) => { }) 
     */
    
    this.http.get('assets/data/categorias.json').subscribe( (respuesta: Categoria) => {
      console.log("Respuesta Old: ", respuesta);
      console.log("Productos Old: ", respuesta['frutas']);

      
    });
    
  }

  private cargarCategoriasWeb(): void {
    console.log("Metodo Privado cargarCategoriasWeb");

    this.http.get('https://learsixela.github.io/productos_json/productos.json')
    .subscribe( (respuesta) => {
      console.log("Respuesta desde la web: ", respuesta);

     }) 
    
  }

}
