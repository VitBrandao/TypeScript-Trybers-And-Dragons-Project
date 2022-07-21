import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _mageInstances = 0;

  constructor(name: string) {
    super(name);
    Mage.newInstance();
    this._energyType = 'mana';
  }

  get energyType() {
    return this._energyType;
  }

  public static newInstance() {
    this._mageInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._mageInstances;
  }
}

// const m1 = new Mage('Gandalf');
// console.log(m1.name);
// console.log(m1.energyType);

export default Mage;