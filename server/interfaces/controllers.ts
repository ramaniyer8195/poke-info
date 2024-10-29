import { PokemonData, PokemonDetailsData } from "./frontendSchema";

export interface GetPokemonsRes {
  data: PokemonData[];
}

export interface GetPokemonQueryParams {
  regions: string | null;
  types: string | null;
  search: string | null;
}

export interface GetPokemonRes {
  data: PokemonDetailsData | null;
  error: string;
}

export interface GetPokemonParams {
  pokemonId: string;
}
