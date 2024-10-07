import { CSSProperties } from "react";

export interface Ability {
  name: string;
  hidden: boolean;
  desc: string;
  abilityId: number;
}

export interface Item {
  name: string;
  desc: string;
  cost: number;
  sprite: string;
  itemId: number;
}

export interface Move {
  name: string;
  desc: string;
  moveId: number;
  accuracy: number;
  pp: number;
  power: number;
  priority: number;
  type: string;
}

export interface Pokemon {
  pokemonId: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  genera: string;
  color: string;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  abilities: Ability[];
  heldItems: Item[];
  areaEncounter: string[];
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
  moves: Move[];
  sprites: {
    [key: string]: { regular: string; shiny: string };
  };
  evolutionChain: {
    nodes: {
      id: string;
      data: { name: string; id: number; types: string[]; sprite: string };
      position: { x: number; y: number };
      selectable: false;
      draggable: false;
      deletable: false;
    }[];
    edges: {
      id: string;
      source: string;
      target: string;
      data: { label: string };
      style: CSSProperties;
      selectable: false;
      deletable: false;
    }[];
  };
}
