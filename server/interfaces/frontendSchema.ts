export interface PokemonsData {
  pokemons: {
    name: string;
    pokemonId: number;
    types: string[];
    sprite: string;
  }[];
}

export interface PokemonDetails {
  pokemonId: number;
  name: string;
  types: string[];
  color: string;
  height: number;
  weight: number;
  genera: string;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  training: {
    catchRate: number;
    baseHappiness: number;
    baseExperience: number;
    hatchCounter: number;
  };
  formSprites: { [key: string]: { regular: string; shiny: string } };
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: {
    desc: string;
    name: string;
    isHidden: boolean;
  }[];
  heldItems: {
    name: string;
    desc: string;
    cost: number;
    sprite: string;
  }[];
  areaEncounter: string[];
  moves: {
    name: string;
    desc: string;
    accuracy: number;
    pp: number;
    power: number;
    priority: number;
    type: string;
  }[];
  evolutionChain: {
    nodes: {
      id: string;
      type: string;
      data: {
        name: string;
        id: number;
        types: string[];
        sprite: string;
        nodeLevel: 0 | 1 | 2;
      };
      position: {
        x: number;
        y: number;
      };
    }[];
    edges: {
      id: string;
      type: string;
      source: string;
      target: string;
      data: {
        label: string;
      };
      style: {
        stroke: string;
      };
    };
  };
}
