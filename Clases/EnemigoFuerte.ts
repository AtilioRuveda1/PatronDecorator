import { Enemigo } from "./Enemigo";

export default class EnemigoFuerte implements Enemigo {
    recibeDaño(): number {
        return 5;
    }
}