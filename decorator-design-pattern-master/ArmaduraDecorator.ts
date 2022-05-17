import EnemigoDecorator from './EnemigoDecorator';

export class ArmaduraDecorator extends EnemigoDecorator {

    recibeDaño(): number {
        return this.enemigo.recibeDaño() * 0.7;
    }
}