import { PokeEncounterTabProps } from "@/interfaces/home";
import { Badge } from "../ui/badge";
import AreaEncounterModal from "../modals/AreaEncounterModal";
import { useState } from "react";

const PokeEncountersTab = ({
  pokemon,
  handleSpriteChange,
}: PokeEncounterTabProps) => {
  const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);

  const handleAreaModalOpenChange = (open: boolean) => {
    setIsAreaModalOpen(open);
  };

  const getAreaEncounter = () => {
    if (pokemon.areaEncounter.length === 0) {
      return (
        <div className="w-full text-center">
          Cannot be encountered in the wild!
        </div>
      );
    }
    if (pokemon.areaEncounter.length > 23) {
      const excessCount = pokemon.areaEncounter.length - 23;
      return (
        <div className="w-full grid grid-cols-3 gap-3">
          {pokemon.areaEncounter.slice(0, 23).map((area) => {
            return <span>{area}</span>;
          })}
          <Badge
            className="cursor-pointer w-fit"
            onClick={() => setIsAreaModalOpen(true)}
          >
            +{excessCount} other areas
          </Badge>
        </div>
      );
    } else {
      return (
        <div className="w-full grid grid-cols-3 gap-3">
          {pokemon.areaEncounter.map((area) => {
            return <span>{area}</span>;
          })}
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="text-center font-bold text-xl font-display">
          Encounter Areas
        </div>
        <div className="w-full h-[1px] bg-primary"></div>
        {getAreaEncounter()}
        <div className="text-center font-bold font-display text-xl">Forms</div>
        <div className="w-full h-[1px] bg-primary"></div>
        <div className="flex gap-2 flex-wrap">
          {Object.keys(pokemon.sprites).map((form) => {
            return (
              <Badge
                onClick={() => handleSpriteChange(form)}
                className="cursor-pointer capitalize"
              >
                {form === pokemon.name.toLowerCase()
                  ? pokemon.name
                  : form
                      .split("-")
                      .filter((name) => name !== pokemon.name.toLowerCase())
                      .join(" ")}
              </Badge>
            );
          })}
        </div>
      </div>
      <AreaEncounterModal
        isOpen={isAreaModalOpen}
        onOpenChange={handleAreaModalOpenChange}
        pokemonName={pokemon.name}
        areas={pokemon.areaEncounter}
      />
    </>
  );
};

export default PokeEncountersTab;
