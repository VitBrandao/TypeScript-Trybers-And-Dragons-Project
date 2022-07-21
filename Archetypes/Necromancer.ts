import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _necromancerInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.newInstance();
    this._energyType = 'mana';
  }

  get energyType() {
    return this._energyType;
  }

  public static newInstance() {
    this._necromancerInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._necromancerInstances;
  }
}

// const n1 = new Necromancer('Qyburn');
// console.log(n1.name);
// console.log(n1.energyType);

export default Necromancer;