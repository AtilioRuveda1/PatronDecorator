import EnemigoBase from "../Clases/EnemigoBase";
import EnemigoFuerte from "../Clases/EnemigoFuerte";
import { CascoDecorator } from "../Clases/CascoDecorator";
import { ArmaduraDecorator } from "../Clases/ArmaduraDecorator";

test('1)Cuando_EnemigoBaseRecibeDaño_Deberia_DevolverDiez', () =>  {
    const enemigo = new EnemigoBase;
    expect(enemigo.recibeDaño()).toBe(10);
});

test('2)Cuando_EnemigoBaseConCasoRecibeDaño_Deberia_DevolverOcho', () =>  {
    const enemigo = new EnemigoBase;
    expect(enemigo.recibeDaño()).toBe(8);
});