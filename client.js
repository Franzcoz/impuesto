export class Cliente {
    constructor (nombre, impu) {
        this.nombre = nombre;
        this.impuesto = impu
    }    
    get Nombre() {
        console.log(this.nombre);
    }
    set Nombre(nom2) {
        this.nombre = nom2;
    }
    calcularImpuesto() {
        return (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 21 / 100;
    }
    get Impuesto() {
        console.log(this.impuesto.impuesto);
    }
}