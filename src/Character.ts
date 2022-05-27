import Archetype from './Archetypes';
import { EnergyType } from './Energy';
import Fighter from './Fighter';
import Race from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: EnergyType;
  private _name: string;

}

export default Character;

/* 

Devem ser inicializados no construtor:
race por padrão com uma instância de Elf;
archetype por padrão com uma instância de Mage;
maxLifePoints por padrão com metade do maxLifePoints da raça instanciada;
lifePoints por padrão com o mesmo valor de maxLifePoints da classe;
strength, defense com valores aleatórios de no mínimo 1 e no máximo 10 pontos; sparklessparkles
dexterity por padrão com a mesma destreza da raça instanciada;
energy por padrão:
type_ com o mesmo valor do arquétipo instanciado;
amount com um valor aleatório de no mínimo 1 e no máximo 10 pontos. sparklessparkles
Os atributos da classe Character podem ser lidos mas não podem ser alterados:
race deve retornar o tipo Race;
archetype deve retornar o tipo Archetype
lifePoints deve retornar o tipo number;
strength deve retornar o tipo number;
defense deve retornar o tipo number;
dexterity deve retornar o tipo number;
energy deve retornar o tipo Energy.
sparkles Lembre-se que energy é um objeto, portanto se você retornar ele diretamente o javascript permite que as propriedades desse objetos sejam alteradas, mesmo energy sendo privado.
*/