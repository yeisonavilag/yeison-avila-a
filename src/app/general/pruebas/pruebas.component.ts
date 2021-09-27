import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  Fecha: number = new Date().getTime();
  Titulo: string = 'Curso de Angular Básico';
  Fecha1: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  Fecha2: string = new Date().toString();
  Mes: number = new Date().getMonth();
  //puede ser uno de los 3 tipos de datos (number|nul|string)
  fecha: number | null=null;
  dia: number|null=null;
  
  dias_semana: string[] = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
  //for (let dia of dias_semana)
  
  eliminado: null|string|undefined = null;
  Contador: number=0;

  Titulo2: string = 'Formulario';

  email: string| null=null;
  password: string| null="";

  //funciones


  //set y get
  get getMes() : number{
    return this.Mes+1;
  }

  getFecha(){
    return this.fecha=new Date().getTime();
  }


  get getDia():number|null {
    return this.dia;
  }

  get getContador(): number {
    return this.Contador;
  }

  //metodos

  obtenerMes(){
    return this.Mes;
  }

  obtenerDia(){
    this.dia = new Date().getDay();
  }

  Sumar(){
    this.Contador++;
  }

  Restar(){
    this.Contador--;
  }

  EliminarDia(){
    this.eliminado=this.dias_semana.pop();
    console.log(this.eliminado);
  }

  AgregarDia(inputAgregar: string){
    this.dias_semana.push(inputAgregar);

  }

  insertar(): void{
    console.log(" metodo insertar ...");
    console.log("Email: "+this.email);
    console.log("Password: "+this.password);
  }

  insertar2(event: any): void {
    console.log(" metodo insertar 2...");
    event.preventDefault();
    console.log(event);
    }

}
