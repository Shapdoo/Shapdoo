import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService {

   private zapatillas: Zapatilla[]

   constructor() {
      this.zapatillas = [
         new Zapatilla(129, 'DC', 'negro', 'DC pro+', true),
         new Zapatilla(108, 'Adidas', 'blanco', 'Adidas Air', false),
         new Zapatilla(180, 'Rebook', 'azul', 'Rebook standard', true),
         new Zapatilla(100, 'Converse', 'amarillo', 'Allstars', true)
      ]
   }

   getTexto(): string {
      return "Hola mundo dese un servicio"
   }

   getZapatillas(): Array<Zapatilla> {
      return this.zapatillas
   }
}