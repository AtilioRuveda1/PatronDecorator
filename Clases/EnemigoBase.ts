import { Enemigo } from "./Enemigo";

export default class EnemigoBase implements Enemigo {
    recibeDaño(): number {
        return 10;
    }
}