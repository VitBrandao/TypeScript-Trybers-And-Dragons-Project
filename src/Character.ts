import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._race = new Elf('Legolas', 5);
    this._archetype = new Mage('Gandalf');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }
}

export default Character;

// /* 
// Os atributos da classe Character podem ser lidos mas não podem ser alterados:
// race deve retornar o tipo Race;
// archetype deve retornar o tipo Archetype
// lifePoints deve retornar o tipo number;
// strength deve retornar o tipo number;
// defense deve retornar o tipo number;
// dexterity deve retornar o tipo number;
// energy deve retornar o tipo Energy.
// Lembre-se que energy é um objeto, portanto se você retornar ele diretamente o javascript permite que as propriedades desse objetos sejam alteradas, mesmo energy sendo privado.
// */