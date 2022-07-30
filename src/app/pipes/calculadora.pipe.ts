import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

    transform(value: any, args: any) {
        let operaciones = `
            Suma: ${value + args} -
            Resta: ${value - args} -
            Multiplicación: ${value * args} -
            División: ${value / args} 
        `

        return operaciones
    }
}