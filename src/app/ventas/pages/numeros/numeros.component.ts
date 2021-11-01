import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 324543804.2361;
  porcentaje: number = 0.4832;

  constructor() {}

  ngOnInit(): void {}
}
