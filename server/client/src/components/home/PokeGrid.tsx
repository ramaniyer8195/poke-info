import PokeDetailsModal from "../modals/PokeDetailsModal";
import { useState } from "react";
import PokeCard from "./PokeCard";
import { PokemonData, Pokemon } from "@/interfaces/api";
import { getPokemonDetails } from "@/utils/apiUtils";
import { DEFAULT_POKEMON } from "@/constants/pokeConstants";
import { PokeGridProps } from "@/interfaces/home";
import noResults from "../../assets/no-results.png";

const PokeGrid = ({ pokemonList }: PokeGridProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] =
    useState<Pokemon>(DEFAULT_POKEMON);

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
      {pokemonList.length > 0 ? (
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
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <img src={noResults} alt="No Results" className="w-[500px]" />
          <p className="text-4xl font-display">No Pokemons found!</p>
          <p className="text-2xl">Try modifying the search/filters</p>
        </div>
      )}
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
