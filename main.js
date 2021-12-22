import {Cliente} from "./client.js";
import {Impuestos} from "./imp.js";

let impues1 = new Impuestos(2000000, 35000);
let clien1 = new Cliente('jarge', impues1);

console.log(impues1);
console.log(clien1);
console.log(clien1.calcularImpuesto());