import { mostrarResultado } from "./main.js";

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #anioFabr;
    #cilindrada;

    constructor(marca,modelo,color,anioFabr,cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#anioFabr = anioFabr;
        this.#cilindrada = cilindrada;
    }
    getMarca(){
        return this.#marca;
    }
    setMarca(marca){
        this.#marca = marca;
    }
    getModelo(){
        return this.#modelo;
    }
    setModelo(modelo){
        this.#modelo = modelo;
    }
    getColor(){
        return this.#color;
    }
    setColor(color){
        this.#color = color;
    }
    getAnioFabr(){
        return this.#anioFabr;
    }
    setAnioFabr(anioFabr){
        this.#anioFabr = anioFabr;
    }
    getCilindrada(){
        return this.#cilindrada;
    }
    setCilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }
    mostrarDatos(){
        const datos = `
            La marca del vehiculo es -> ${this.#marca}</br>
            El modelo del vehiculo es -> ${this.#modelo}</br>
            El color del vehiculo es -> ${this.#color}</br>
            El año de fabricacion del vehiculo es -> ${this.#anioFabr}</br>
            La cilindrada del vehiculo es -> ${this.#cilindrada}</br>
        `;
        mostrarResultado(datos)

    }
    acelerar(velocidad){
        const mensaje = `El vehiculo ha acelerado hasta ${velocidad} km/h`
        mostrarResultado(mensaje);
    }
    arrancar(){
        const mensaje = `El vehiculo ha arrancado y se encuentra en movimiento`
        mostrarResultado(mensaje)
    }
    frenar(){
        const mensaje = `El vehiculo ha frenado y ya no se encuentra en movimiento`
        mostrarResultado(mensaje)
    }
    
    
}