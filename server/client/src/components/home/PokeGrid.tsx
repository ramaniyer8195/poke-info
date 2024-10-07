import { POKEMON_DATA } from "@/constants/data";
import PokeDetailsModal from "../modals/PokeDetailsModal";
import { useState } from "react";
import PokeCard from "./PokeCard";
import { Pokemon } from "@/interfaces/api";

const PokeGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
    POKEMON_DATA[0]
  );

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleModalChange = (pokemon: Pokemon) => {
    setIsOpen(!isOpen);
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-2 px-2">
        {POKEMON_DATA.map((pokemon) => {
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
      />
    </>
  );
};

export default PokeGrid;
