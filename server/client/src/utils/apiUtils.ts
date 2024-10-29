import { PokemonData, PokemonDetails } from "@/interfaces/api";
import axios from "axios";

export const getPokemons = async () => {
  const response = await axios.get<{ data: { pokemons: PokemonData[] } }>(
    `/api/pokemon/getPokemons`
  );

  return response.data.data.pokemons;
};

export const getPokemonDetails = async (pokemonId: number) => {
  const response = await axios.get<{ data: PokemonDetails; error: string }>(
    `/api/pokemon/getPokemon/${pokemonId}`
  );

  return response.data.data;
};
