import { Product } from "./product";

export class Zapatilla implements Product {

    constructor(
        public precio: number,
        public marca: string,
        public color: string,
        public modelo: string,
        public stock: boolean,
    ){}
}