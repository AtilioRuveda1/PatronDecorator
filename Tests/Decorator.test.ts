import EnemigoBase from "../Clases/EnemigoBase";
import EnemigoFuerte from "../Clases/EnemigoFuerte";
import { CascoDecorator } from "../Clases/CascoDecorator";
import { ArmaduraDecorator } from "../Clases/ArmaduraDecorator";


//ENEMIGO BASE
test('1)Cuando_EnemigoBaseRecibeDaño_Deberia_DevolverDiez', () =>  {
    const enemigo = new EnemigoBase;
    expect(enemigo.recibeDaño()).toBe(10);
});

test('2)Cuando_EnemigoBaseConCasoRecibeDaño_Deberia_DevolverOcho', () =>  {
    const enemigo = new EnemigoBase;
    const enemigoBaseConCasco = new CascoDecorator(enemigo);
    expect(enemigoBaseConCasco.recibeDaño()).toBe(8);
});

test('3)Cuando_EnemigoBaseConArmaduraRecibeDaño_Deberia_DevolverSiete', () =>  {
    const enemigo = new EnemigoBase;
    const enemigoBaseConArmadura = new ArmaduraDecorator(enemigo);
    expect(enemigoBaseConArmadura.recibeDaño()).toBe(7);
});

test('4)Cuando_EnemigoBaseConArmaduraYCascoRecibeDaño_Deberia_Devolver"5,6"', () =>  {
    const enemigo = new EnemigoBase;
    const enemigoBaseConArmadura = new ArmaduraDecorator(enemigo);
    const enemigoBaseConArmaduraYCasco = new CascoDecorator(enemigoBaseConArmadura);
    expect(enemigoBaseConArmaduraYCasco.recibeDaño()).toBe(7*0.8);
});

//ENEMIGO FUERTE
test('5)Cuando_EnemigoFuerteRecibeDaño_Deberia_Devolver5', () =>  {
    const enemigo = new EnemigoFuerte;
    expect(enemigo.recibeDaño()).toBe(5);
});
