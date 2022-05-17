import BaseEnemy from "./EnemigoBase";
import { CascoDecorator } from "./CascoDecorator"
import { ArmaduraDecorator } from "./ArmaduraDecorator";
import DifficultEnemy from "./EnemigoFuerte";

let enemy = new DifficultEnemy();
let enemyWithHelmet = new CascoDecorator(enemy);
let enemyWithHelmetAndArmour = new ArmaduraDecorator(enemyWithHelmet);

let computedDamaged = enemyWithHelmetAndArmour.recibeDaño();
console.log(computedDamaged);