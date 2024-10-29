import PokeDetailsModal from "../modals/PokeDetailsModal";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { PokemonData, Pokemon } from "@/interfaces/api";
import { getPokemonDetails, getPokemons } from "@/utils/apiUtils";
import { DEFAULT_POKEMON } from "@/constants/pokeConstants";

const PokeGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [selectedPokemon, setSelectedPokemon] =
    useState<Pokemon>(DEFAULT_POKEMON);

  useEffect(() => {
    const getPokemonsData = async () => {
      const pokemonRes = await getPokemons();
      setPokemonList(pokemonRes);
    };

    getPokemonsData();
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleModalChange = async (pokemon: PokemonData) => {
    const pokemonDetails = await getPokemonDetails(pokemon.pokemonId);
    setSelectedPokemon(pokemonDetails);
    setIsOpen(true);
  };

  const handlePokemonChange = (pokemonId: number) => {
    const selectedPokemon = pokemonList.find(
      (pokemon) => pokemon.pokemonId === pokemonId
    );
    if (selectedPokemon) {
      setIsOpen(false);
      handleModalChange(selectedPokemon);
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-2 px-2">
        {pokemonList.map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.pokemonId}
              pokemon={pokemon}
              handleModalChange={handleModalChange}
            />
          );
        })}
      </div>
      <PokeDetailsModal
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        pokemon={selectedPokemon}
        handlePokemonChange={handlePokemonChange}
      />
    </>
  );
};

export default PokeGrid;
