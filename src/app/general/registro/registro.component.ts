import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  email: string| null=null;
  password: string| null="";
  passwordConfirm: string| null="";
  nombre: string| null=null;
  apellido: string| null=null;

  insertar():void{
    console.log(" metodo insertar ...");
    console.log("Email: "+this.email);
    console.log("Password: "+this.password);
    console.log("Confirmacion Password: "+this.passwordConfirm);
    console.log("Nombre: "+this.nombre);
    console.log("Apellido: "+this.apellido);
  }

}
