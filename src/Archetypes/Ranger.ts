import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangerInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.newInstance();
    this._energyType = 'stamina';
  }

  get energyType() {
    return this._energyType;
  }

  public static newInstance() {
    this._rangerInstances += 1;
  }

  public static createdArchetypeInstances() {
    return this._rangerInstances;
  }
}

// const r1 = new Ranger('Jon Snow');
// console.log(r1.name);
// console.log(r1.energyType);

export default Ranger;