import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string| null=null;
  password: string| null="";


  insertar():void{
    console.log(" metodo insertar ...");
    console.log("Email: "+this.email);
    console.log("Password: "+this.password);
  }
}
