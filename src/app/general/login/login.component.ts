import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string="";
  password: string="";
  //myForm: FormGroup;
  //fb: FormBuilderBuilder;

    
/*
  this.myForm = this.fb.group({
    name: ['', [Validators.required]],
    company: ['', [Validators.required]],
    email: ['', [Validators.required]],
    age: ['', [Validators.required]],
    url: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  */

  insertar():void{
    
    console.log(" metodo insertar ...");
    if( this.validarEmail() && this.validarPassword()){
      console.log("Email: "+this.email);
      console.log("Password: "+this.password);
    }else {
      console.log("No validado");
    }
    
  }

  validarEmail(): boolean {
    
    if (this.email.trim().length > 0) {
      console.log("El campo contiene un string válido que no son espacios");
      if (this.email.indexOf('@', 0) == -1 || this.email.indexOf('.', 0) == -1) {
        alert('El correo electrónico introducido no es correcto.');
        console.log("Email: "+this.email);
        return false;
      } else

        return true;
    } 
    else {
      alert("El campo contiene espacios y está vacío");
      return false;
     }

  }

  validarPassword(): boolean{
    if (this.password.trim().length==0) {
      alert("Campo vacio");
      return false;
      } else if (this.password.length < 15) {
      
      console.log("Pass: "+this.password);
        return true;
      } else {
        
        return false;
      }
    }
}
//agregar variable que muestre el error en frontend