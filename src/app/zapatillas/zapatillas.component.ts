import { Component, OnInit } from '@angular/core';
import { configuracion, styles } from '../models/configuracion';
import { Zapatilla } from '../models/zapatilla';

const { titulo } = configuracion

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {
  title: string
  style: {}
  color: string
  marcas: string[]
  miMarca: string

  zapatillas: Zapatilla[]

  constructor() {
    this.miMarca = ''
    this.title = titulo
    this.style = styles
    this.color = 'yellow'
    this.marcas = []

    this.zapatillas = [
      new Zapatilla(129, 'DC', 'negro', 'DC pro+', true),
      new Zapatilla(108, 'Adidas', 'blanco', 'Adidas Air', false),
      new Zapatilla(180, 'Rebook', 'azul', 'Rebook standard', true),
      new Zapatilla(100, 'Converse', 'amarillo', 'Allstars', true)
    ]
  }

  ngOnInit(): void {
    this.getMarcas()
  }

  getMarcas(): void {
    this.zapatillas.forEach(({ marca }) => {
      if (this.marcas.indexOf(marca) < 0) {
        this.marcas.push(marca)
      }

    })
  }

  addMarca(): void {
    this.marcas.push(this.miMarca)
  }
}
