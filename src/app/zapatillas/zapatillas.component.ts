import { Component, OnInit } from '@angular/core';
import { configuracion, styles } from '../models/configuracion';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

const { titulo } = configuracion

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [
    ZapatillaService
  ]
})
export class ZapatillasComponent implements OnInit {
  title: string
  style: {}
  color: string
  marcas: string[]
  miMarca: string

  zapatillas!: Zapatilla[]

  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.miMarca = ''
    this.title = titulo
    this.style = styles
    this.color = 'yellow'
    this.marcas = []
  }

  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas()
    console.log(this._zapatillaService.getTexto())
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
