abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(n: string, d: number) {
    this._name = n;
    this._dexterity = d;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}

export default Race;

/*
A classe Race existe; <
O atributo name da classe Race pode ser lido; <
O atributo dexterity da classe Race pode ser lido; <
O atributo dexterity da classe Race NÃO pode ser redefinido; <
O método maxLifePoints ao ser implementado retorna um valor numérico; <

A classe Race é abstrata;
O método maxLifePoints da classe Race é abstrato;
O atributo name da classe Race NÃO pode ser alterado;
O método createdRacesInstances deve existir e ser estático; 
O método createdRacesInstances deve lançar um erro com a mensagem "Not implemented".
*/