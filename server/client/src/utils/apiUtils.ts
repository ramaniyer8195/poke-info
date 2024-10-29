import { PokemonData, Pokemon } from "@/interfaces/api";
import axios from "axios";

export const getPokemons = async (filters = "") => {
  const response = await axios.get<{ data: PokemonData[] }>(
    `/api/pokemon/getPokemons${filters}`
  );

  return response.data.data;
};

export const getPokemonDetails = async (pokemonId: number) => {
  const response = await axios.get<{ data: Pokemon; error: string }>(
    `/api/pokemon/getPokemon/${pokemonId}`
  );

  return response.data.data;
};
