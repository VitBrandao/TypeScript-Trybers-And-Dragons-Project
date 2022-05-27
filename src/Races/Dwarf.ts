import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.newInstance();
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static newInstance() {
    this._dwarfInstances += 1;
  }

  public static createdRacesInstances() {
    return this._dwarfInstances;
  }
}

// const d1 = new Dwarf('Gimli', 54);
// console.log(d1.name);
// console.log(d1.dexterity);
// console.log(d1.maxLifePoints);

export default Dwarf;