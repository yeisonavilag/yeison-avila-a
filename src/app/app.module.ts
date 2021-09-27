import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HomeComponent } from './general/home/home.component';
import { LoginComponent } from './general/login/login.component';
import { RegistroComponent } from './general/registro/registro.component';
import { NoEncontradaComponent } from './general/no-encontrada/no-encontrada.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    NoEncontradaComponent,
    PruebasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
