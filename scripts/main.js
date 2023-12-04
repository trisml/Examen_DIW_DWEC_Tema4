import { Vehiculo } from "./vehiculo.js";
import {AutomovilDeportivo} from "./automovilDeportivo.js"


const resultadoContainer = document.createElement("div");
document.body.appendChild(resultadoContainer);
export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`
}

const vehiculo1 = new Vehiculo('BMW','CLK','rojo',1992,'2400');


vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const vehiculoObject = {
    marca: vehiculo1.getMarca(),
    modelo: vehiculo1.getModelo(),
    color: vehiculo1.getColor(),
    anioFabr: vehiculo1.getAnioFabr(),
    cilindrada: vehiculo1.getCilindrada(),
}


localStorage.setItem("vehiculo",JSON.stringify(vehiculoObject));

console.log(JSON.parse(localStorage.getItem("vehiculo")));


const deportivo1 = new AutomovilDeportivo('Ferrari','Spider','amarillo',2020,'4000','500');
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();

const deportivoObject = {
    marca: deportivo1.getMarca(),
    modelo: deportivo1.getModelo(),
    color: deportivo1.getColor(),
    anioFabr : deportivo1.getAnioFabr(),
    cilindrada: deportivo1.getCilindrada(),
    potencia: deportivo1.getPotencia()
}

for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key])
    }
}
//Eliminamos del localStorage las propiedades color y potencia
localStorage.removeItem('color');
localStorage.removeItem('potencia');
//Con esta linea de codigo lo que hacemos es borrar el localStorage entero.
localStorage.clear();