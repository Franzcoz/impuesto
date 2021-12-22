export class Impuestos {
    constructor (monto_bruto_anual, deducciones) {
        this.monto_bruto_anual = monto_bruto_anual;
        this.deducciones = deducciones;
    }
    get Monto_bruto_anual () {
        console.log(this.monto_bruto_anual);
    }
    set Monto_bruto_anual(newmon) {
        this.monto_bruto_anual = newmon;
    }
    get Deducciones () {
        console.log(this.deducciones);
    }
    set Deducciones(newded) {
        this.deducciones = newded;
    }
}