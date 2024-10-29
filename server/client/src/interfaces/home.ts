import { PokemonData, Pokemon } from "./api";

export interface PokeGridProps {
  pokemonList: PokemonData[];
}

export interface PokeCardProps {
  pokemon: PokemonData;
  handleModalChange: (pokemon: PokemonData) => void;
}

export interface TabProps {
  pokemon: Pokemon;
}

export interface PokeEncounterTabProps extends TabProps {
  handleSpriteChange: (form: string) => void;
}

export interface PokeEdgeLabelProps {
  labelX: number;
  labelY: number;
  label: string;
}
