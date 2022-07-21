import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.newInstance();
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static newInstance() {
    this._orcInstances += 1;
  }

  public static createdRacesInstances() {
    return this._orcInstances;
  }
}

// const o1 = new Orc('Loial', 70);
// console.log(o1.name);
// console.log(o1.dexterity);
// console.log(o1.maxLifePoints);

export default Orc;