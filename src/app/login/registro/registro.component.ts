import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string="";
  password: string="";
  passwordConfirm: string="";
  nombre: string="";
  apellido: string="";

  insertar():void{
    console.log(" metodo insertar ...");
    console.log("Email: "+this.email);
    console.log("Password: "+this.password);
    console.log("Confirmacion Password: "+this.passwordConfirm);
    console.log("Nombre: "+this.nombre);
    console.log("Apellido: "+this.apellido);
  }
  
  ngOnInit(): void {
  }

}
