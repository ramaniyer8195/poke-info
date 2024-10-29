import bug from "../assets/types/color-icons/bug.svg";
import dark from "../assets/types/color-icons/dark.svg";
import dragon from "../assets/types/color-icons/dragon.svg";
import electric from "../assets/types/color-icons/electric.svg";
import fairy from "../assets/types/color-icons/fairy.svg";
import fighting from "../assets/types/color-icons/fighting.svg";
import fire from "../assets/types/color-icons/fire.svg";
import flying from "../assets/types/color-icons/flying.svg";
import ghost from "../assets/types/color-icons/ghost.svg";
import grass from "../assets/types/color-icons/grass.svg";
import ground from "../assets/types/color-icons/ground.svg";
import ice from "../assets/types/color-icons/ice.svg";
import normal from "../assets/types/color-icons/normal.svg";
import poison from "../assets/types/color-icons/poison.svg";
import psychic from "../assets/types/color-icons/psychic.svg";
import rock from "../assets/types/color-icons/rock.svg";
import steel from "../assets/types/color-icons/steel.svg";
import water from "../assets/types/color-icons/water.svg";
// white icons
import bug_white from "../assets/types/white-icons/bug.svg";
import dark_white from "../assets/types/white-icons/dark.svg";
import dragon_white from "../assets/types/white-icons/dragon.svg";
import electric_white from "../assets/types/white-icons/electric.svg";
import fairy_white from "../assets/types/white-icons/fairy.svg";
import fighting_white from "../assets/types/white-icons/fighting.svg";
import fire_white from "../assets/types/white-icons/fire.svg";
import flying_white from "../assets/types/white-icons/flying.svg";
import ghost_white from "../assets/types/white-icons/ghost.svg";
import grass_white from "../assets/types/white-icons/grass.svg";
import ground_white from "../assets/types/white-icons/ground.svg";
import ice_white from "../assets/types/white-icons/ice.svg";
import normal_white from "../assets/types/white-icons/normal.svg";
import poison_white from "../assets/types/white-icons/poison.svg";
import psychic_white from "../assets/types/white-icons/psychic.svg";
import rock_white from "../assets/types/white-icons/rock.svg";
import steel_white from "../assets/types/white-icons/steel.svg";
import water_white from "../assets/types/white-icons/water.svg";

import { Pokemon } from "@/interfaces/api";

export const TYPE_IMAGES: { [key: string]: { image: string; key: number } } = {
  bug: {
    image: bug,
    key: 1,
  },
  dark: {
    image: dark,
    key: 2,
  },
  dragon: {
    image: dragon,
    key: 3,
  },
  electric: {
    image: electric,
    key: 4,
  },
  fairy: {
    image: fairy,
    key: 5,
  },
  fighting: {
    image: fighting,
    key: 6,
  },
  fire: {
    image: fire,
    key: 7,
  },
  flying: {
    image: flying,
    key: 8,
  },
  ghost: {
    image: ghost,
    key: 9,
  },
  grass: {
    image: grass,
    key: 10,
  },
  ground: {
    image: ground,
    key: 11,
  },
  ice: {
    image: ice,
    key: 12,
  },
  normal: {
    image: normal,
    key: 13,
  },
  poison: {
    image: poison,
    key: 14,
  },
  psychic: {
    image: psychic,
    key: 15,
  },
  rock: {
    image: rock,
    key: 16,
  },
  steel: {
    image: steel,
    key: 17,
  },
  water: {
    image: water,
    key: 18,
  },
};

export const TYPE_IMAGES_WHITE: {
  [key: string]: { image: string; key: number };
} = {
  bug: {
    image: bug_white,
    key: 1,
  },
  dark: {
    image: dark_white,
    key: 2,
  },
  dragon: {
    image: dragon_white,
    key: 3,
  },
  electric: {
    image: electric_white,
    key: 4,
  },
  fairy: {
    image: fairy_white,
    key: 5,
  },
  fighting: {
    image: fighting_white,
    key: 6,
  },
  fire: {
    image: fire_white,
    key: 7,
  },
  flying: {
    image: flying_white,
    key: 8,
  },
  ghost: {
    image: ghost_white,
    key: 9,
  },
  grass: {
    image: grass_white,
    key: 10,
  },
  ground: {
    image: ground_white,
    key: 11,
  },
  ice: {
    image: ice_white,
    key: 12,
  },
  normal: {
    image: normal_white,
    key: 13,
  },
  poison: {
    image: poison_white,
    key: 14,
  },
  psychic: {
    image: psychic_white,
    key: 15,
  },
  rock: {
    image: rock_white,
    key: 16,
  },
  steel: {
    image: steel_white,
    key: 17,
  },
  water: {
    image: water_white,
    key: 18,
  },
};

export const REGIONS = [
  "kanto",
  "johto",
  "hoenn",
  "sinnoh",
  "unova",
  "kalos",
  "alola",
  "galar",
  "paldea",
];

export const TYPES = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

export const DEFAULT_POKEMON: Pokemon = {
  pokemonId: 0,
  name: "default",
  types: [],
  height: 0,
  weight: 0,
  genera: "",
  color: "",
  isBaby: false,
  isLegendary: false,
  isMythical: false,
  abilities: [],
  heldItems: [],
  areaEncounter: [],
  training: {
    catchRate: 0,
    baseHappiness: 0,
    baseExperience: 0,
    hatchCounter: 0,
  },
  stats: {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
  moves: [],
  sprites: {
    default: {
      regular: "",
      shiny: "",
    },
  },
  evolutionChain: {
    nodes: [],
    edges: [],
  },
};
