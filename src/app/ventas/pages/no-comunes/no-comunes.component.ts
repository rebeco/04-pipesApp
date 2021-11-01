import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Pedro';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
    other: 'invitarte',
  };

  clientes: string[] = ['María', 'Pedro', 'Gracia', 'Fernando', 'Álvaro'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    '=3': 'tenemos # clientes esperando.',
    '=4': 'tenemos # clientes esperando.',
    other: 'tenemos muchos clientes esperando.',
  };

  constructor() {}

  ngOnInit(): void {}

  cambiarPersona() {
    if (this.nombre === 'Pedro') {
      this.nombre = 'Gracia';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Pedro';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }

  persona = {
    nombre: 'Pedro',
    edad: 35,
    direccion: 'Sevilla',
  };

  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Aquaman', vuela: false },
  ];

  miObservable = interval(1000);
}
