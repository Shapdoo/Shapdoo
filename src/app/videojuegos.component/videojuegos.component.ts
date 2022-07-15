//importamos la clase componente
import { Component, Inject, OnInit, OnDestroy, DoCheck } from "@angular/core";

//decorador
@Component({
    selector: "videojuegos",
    templateUrl: './videojuegos.component.html'
})
export class Videojuegos implements OnInit, DoCheck, OnDestroy {
    
    title: string
    videojuegos: string[]
    text: string
    listVideojuegos: boolean = true

    constructor(){
        this.title = 'pls'
        this.videojuegos = ['Gta', 'Mario', 'Word of Warcraft']
        this.text = 'Este texto cambiara cuando se le de click al boton'
    }

    ngOnInit(): void {
       this.listVideojuegos = true
       console.log('OnInit ejecutado')
    }

    ngDoCheck(): void {
        console.log('DoCheck ejecutado')
    }

    ngOnDestroy(): void {
        console.log('OnDestroy ejecutado')
    }

    ocultarVideojuegos(value: boolean): void {
        this.listVideojuegos = value
    }
    
    cambiaTexto(): void {
        this.text = "Te lo dije, he cambiado."
    }
}
