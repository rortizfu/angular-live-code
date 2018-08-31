export interface Datos {
    name: string;
    age: number;
}

export class DatosClass {
    constructor(public name: string, public age: number) {}
}

export const DATOS = {
    name: "cristian",
    age: 29
}