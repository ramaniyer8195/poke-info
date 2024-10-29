import { Document } from "mongoose";

export interface IPokemon extends Document {
  name: string;
  pokemonId: number;
  types: string[];
  pokeImage: string;
  speciesId: number;
  evoId: number;
  moves: number[];
  abilities: { abilityId: number; hidden: boolean }[];
  heldItems: number[];
  areaEncounter: number[];
}

export interface IMove extends Document {
  name: string;
  desc: string;
  moveId: number;
  accuracy: number;
  pp: number;
  power: number;
  priority: number;
  type: string;
}

export interface IAbility extends Document {
  name: string;
  desc: string;
  abilityId: number;
}

export interface IEvo extends Document {
  evoId: number;
  nodes: {
    id: string;
    type: string;
    data: {
      pokemonId: number;
      nodeLevel: -1 | 0 | 1 | 2;
    };
    position: { x: number; y: number };
  }[];
  edges: {
    id: string;
    type: string;
    source: string;
    target: string;
    data: { label: string };
    style: { [key: string]: string };
  }[];
}

export interface IItem extends Document {
  name: string;
  desc: string;
  cost: number;
  sprite: string;
  itemId: number;
}

export interface ILocation extends Document {
  name: string;
  locationId: number;
}

export interface ISpecies extends Document {
  specimenId: number;
  height: number;
  weight: number;
  genera: string;
  color: string;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  training: {
    catchRate: number;
    baseHappiness: number;
    baseExperience: number;
    hatchCounter: number;
  };
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  sprites: { [key: string]: { regular: string; shiny: string } };
}
