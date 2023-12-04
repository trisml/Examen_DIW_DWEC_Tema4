import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo extends Vehiculo{
    #potencia

    constructor(marca,modelo,color,anioFabr,cilindrada,potencia){
        super(marca,modelo,color,anioFabr,cilindrada)
            this.#potencia = potencia;
        }
    modoDeportivo(){
        const mensaje = `El modo deportivo esta activado`
        mostrarResultado(mensaje)
    }
    getPotencia(){
        return this.#potencia;
    }
    setPotencia(potencia){
        this.#potencia = potencia;
    }
    mostrarDatos(){
        super.mostrarDatos()
        const datos = `La potencia es -> ${this.#potencia}`
        mostrarResultado(datos)
    }

}