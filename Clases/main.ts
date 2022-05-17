import EnemigoBase from "./EnemigoBase";
import { CascoDecorator } from "./CascoDecorator"
import { ArmaduraDecorator } from "./ArmaduraDecorator";
import EnemigoFuerte from "./EnemigoFuerte";

let enemy = new EnemigoFuerte();
let enemyWithHelmet = new CascoDecorator(enemy);
let enemyWithHelmetAndArmour = new ArmaduraDecorator(enemyWithHelmet);

let computedDamaged = enemyWithHelmetAndArmour.recibeDaño();
console.log(computedDamaged);