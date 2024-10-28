import { PokemonDetails, PokemonsData } from "./frontendSchema";

export interface GetPokemonsRes {
  data: PokemonsData;
}

export interface GetPokemonDetailsRes {
  data: PokemonDetails | null;
  error: string;
}

export interface GetPokemonDetailsParams {
  pokemonId: string;
}
