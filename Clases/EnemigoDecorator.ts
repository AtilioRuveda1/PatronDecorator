import { Enemigo } from "./Enemigo";

export default abstract class EnemigoDecorator implements Enemigo {

    protected enemigo: Enemigo;

    constructor(enemigo: Enemigo) {
        this.enemigo = enemigo;
    }

    recibeDaño(): number {
        return this.enemigo.recibeDaño();
    }

}