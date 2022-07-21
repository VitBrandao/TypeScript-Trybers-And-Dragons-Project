import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.newInstance();
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static newInstance() {
    this._halflingInstances += 1;
  }

  public static createdRacesInstances() {
    return this._halflingInstances;
  }
}

// const h1 = new Halfling('Pippin', 50);
// console.log(h1.name);
// console.log(h1.dexterity);
// console.log(h1.maxLifePoints);

export default Halfling;