import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
  ],
  exports:[
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
  ]
})
export class LoginModule { }
