import EnemigoDecorator from './EnemigoDecorator';

export class CascoDecorator extends EnemigoDecorator {

    recibeDaño(): number {
        return this.enemigo.recibeDaño() * 0.8;
    }
}