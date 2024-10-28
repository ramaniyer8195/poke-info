export interface IAbility {
  desc: string;
  name: string;
  abilityId: number;
}

export interface IEvo {
  evoId: number;
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
}

export interface IItem {
  name: string;
  desc: string;
  cost: number;
  sprite: string;
  itemId: number;
}

export interface ILocation {
  name: string;
  locationId: number;
}

export interface IMove {
  name: string;
  desc: string;
  moveId: number;
  accuracy: number;
  pp: number;
  power: number;
  priority: number;
  type: string;
}

export interface IPokemon {
  pokemonId: number;
  name: string;
  types: string[];
  sprite: string;
  speciesId: number;
  abilities: {
    abilityId: number;
    isHidden: boolean;
  }[];
  heldItems: number[];
  areaEncounter: number[];
  moves: number[];
  evolutionChain: number;
}

export interface ISpecies {
  specimenId: number;
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
  formSprites: Map<string, { regular: string; shiny: string }>;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}
