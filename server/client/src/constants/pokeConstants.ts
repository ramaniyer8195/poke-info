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

export const TYPE_MATCHUPS: {
  [key: string]: {
    attack: { [key: string]: string[] };
    defense: { [key: string]: string[] };
  };
} = {
  normal: {
    attack: {
      "0x": ["ghost"],
      "0.5x": ["rock", "steel"],
      "2x": [],
    },
    defense: {
      "0x": ["ghost"],
      "0.5x": [],
      "2x": ["fighting"],
    },
  },
  fire: {
    attack: {
      "0x": [],
      "0.5x": ["fire", "water", "rock", "dragon"],
      "2x": ["grass", "ice", "bug", "steel"],
    },
    defense: {
      "0x": [],
      "0.5x": ["fire", "grass", "ice", "bug", "steel", "fairy"],
      "2x": ["water", "ground", "rock"],
    },
  },
  water: {
    attack: {
      "0x": [],
      "0.5x": ["water", "grass", "dragon"],
      "2x": ["fire", "ground", "rock"],
    },
    defense: {
      "0x": [],
      "0.5x": ["fire", "water", "ice", "steel"],
      "2x": ["electric", "grass"],
    },
  },
  grass: {
    attack: {
      "0x": [],
      "0.5x": ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
      "2x": ["water", "ground", "rock"],
    },
    defense: {
      "0x": [],
      "0.5x": ["water", "electric", "grass", "ground"],
      "2x": ["fire", "ice", "poison", "flying", "bug"],
    },
  },
  electric: {
    attack: {
      "0x": ["ground"],
      "0.5x": ["electric", "grass", "dragon"],
      "2x": ["water", "flying"],
    },
    defense: {
      "0x": [],
      "0.5x": ["electric", "flying", "steel"],
      "2x": ["ground"],
    },
  },
  ice: {
    attack: {
      "0x": [],
      "0.5x": ["fire", "water", "ice", "steel"],
      "2x": ["grass", "ground", "flying", "dragon"],
    },
    defense: {
      "0x": [],
      "0.5x": ["ice"],
      "2x": ["fire", "fighting", "rock", "steel"],
    },
  },
  fighting: {
    attack: {
      "0x": ["ghost"],
      "0.5x": ["poison", "flying", "psychic", "bug", "fairy"],
      "2x": ["normal", "ice", "rock", "dark", "steel"],
    },
    defense: {
      "0x": [],
      "0.5x": ["bug", "rock", "dark"],
      "2x": ["flying", "psychic", "fairy"],
    },
  },
  poison: {
    attack: {
      "0x": ["steel"],
      "0.5x": ["poison", "ground", "rock", "ghost"],
      "2x": ["grass", "fairy"],
    },
    defense: {
      "0x": [],
      "0.5x": ["grass", "fighting", "poison", "bug", "fairy"],
      "2x": ["ground", "psychic"],
    },
  },
  ground: {
    attack: {
      "0x": ["flying"],
      "0.5x": ["grass", "bug"],
      "2x": ["fire", "electric", "poison", "rock", "steel"],
    },
    defense: {
      "0x": ["electric"],
      "0.5x": ["poison", "rock"],
      "2x": ["water", "grass", "ice"],
    },
  },
  flying: {
    attack: {
      "0x": [],
      "0.5x": ["electric", "rock", "steel"],
      "2x": ["grass", "fighting", "bug"],
    },
    defense: {
      "0x": ["ground"],
      "0.5x": ["grass", "fighting", "bug"],
      "2x": ["electric", "ice", "rock"],
    },
  },
  psychic: {
    attack: {
      "0x": ["dark"],
      "0.5x": ["psychic", "steel"],
      "2x": ["fighting", "poison"],
    },
    defense: {
      "0x": [],
      "0.5x": ["fighting", "psychic"],
      "2x": ["bug", "ghost", "dark"],
    },
  },
  bug: {
    attack: {
      "0x": [],
      "0.5x": [
        "fire",
        "fighting",
        "poison",
        "flying",
        "ghost",
        "steel",
        "fairy",
      ],
      "2x": ["grass", "psychic", "dark"],
    },
    defense: {
      "0x": [],
      "0.5x": ["grass", "fighting", "ground"],
      "2x": ["fire", "flying", "rock"],
    },
  },
  rock: {
    attack: {
      "0x": [],
      "0.5x": ["fighting", "ground", "steel"],
      "2x": ["fire", "ice", "flying", "bug"],
    },
    defense: {
      "0x": [],
      "0.5x": ["normal", "fire", "poison", "flying"],
      "2x": ["water", "grass", "fighting", "ground", "steel"],
    },
  },
  ghost: {
    attack: {
      "0x": ["normal"],
      "0.5x": ["dark"],
      "2x": ["psychic", "ghost"],
    },
    defense: {
      "0x": ["normal", "fighting"],
      "0.5x": ["poison", "bug"],
      "2x": ["ghost", "dark"],
    },
  },
  dragon: {
    attack: {
      "0x": ["fairy"],
      "0.5x": ["steel"],
      "2x": ["dragon"],
    },
    defense: {
      "0x": [],
      "0.5x": ["fire", "water", "electric", "grass"],
      "2x": ["ice", "dragon", "fairy"],
    },
  },
  dark: {
    attack: {
      "0x": [],
      "0.5x": ["fighting", "dark", "fairy"],
      "2x": ["psychic", "ghost"],
    },
    defense: {
      "0x": ["psychic"],
      "0.5x": ["ghost", "dark"],
      "2x": ["fighting", "bug", "fairy"],
    },
  },
  steel: {
    attack: {
      "0x": [],
      "0.5x": ["fire", "water", "electric", "steel"],
      "2x": ["ice", "rock", "fairy"],
    },
    defense: {
      "0x": ["poison"],
      "0.5x": [
        "normal",
        "grass",
        "ice",
        "flying",
        "psychic",
        "bug",
        "rock",
        "dragon",
        "steel",
        "fairy",
      ],
      "2x": ["fire", "fighting", "ground"],
    },
  },
  fairy: {
    attack: {
      "0x": [],
      "0.5x": ["fire", "poison", "steel"],
      "2x": ["fighting", "dragon", "dark"],
    },
    defense: {
      "0x": ["dragon"],
      "0.5x": ["fighting", "bug", "dark"],
      "2x": ["poison", "steel"],
    },
  },
};
