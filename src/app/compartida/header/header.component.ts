import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  anio: number = new Date().getFullYear();
  mes: number = new Date().getMonth();
  dia: number = new Date().getDay();
  constructor() { }

  ngOnInit(): void {
  }

}
