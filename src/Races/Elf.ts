import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.newInstance();
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static newInstance() {
    this._elfInstances += 1;
  }

  public static createdRacesInstances() {
    return this._elfInstances;
  }
}

// const e1 = new Elf('Legolas', 540);
// console.log(e1.name);
// console.log(e1.dexterity);
// console.log(e1.maxLifePoints);

export default Elf;