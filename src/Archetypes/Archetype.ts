import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(n: string) {
    this._name = n;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;