import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _warriorInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior.newInstance();
    this._energyType = 'stamina';
  }

  get energyType() {
    return this._energyType;
  }

  public static newInstance() {
    this._warriorInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._warriorInstances;
  }
}

// const w1 = new Warrior('Aragorn');
// console.log(w1.name);
// console.log(w1.energyType);

export default Warrior;