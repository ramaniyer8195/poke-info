import { PokeDetailsTabProps } from "@/interfaces/home";
import { getHeightString, getWeightString } from "@/utils/pokeUtils";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { Ability, Item } from "@/interfaces/api";
import AbilityDetailsModal from "../modals/AbilityDetailsModal";
import ItemDetailsModal from "../modals/ItemDetailsModal";

const PokeDetailsTab = ({
  pokemon,
  handleSpriteChange,
}: PokeDetailsTabProps) => {
  console.log(pokemon);
  const [ability, setAbility] = useState<Ability | null>(null);
  const [item, setItem] = useState<Item | null>(null);
  const [isAbilityOpen, setIsAbilityOpen] = useState(false);
  const [isItemOpen, setIsItemOpen] = useState(false);

  const handleAbilityOpenChange = (open: boolean) => {
    setIsAbilityOpen(open);
  };

  const handleItemOpenChange = (open: boolean) => {
    setIsItemOpen(open);
  };

  const handleAbilitySelect = (ability: Ability) => {
    setAbility(ability);
    setIsAbilityOpen(true);
  };

  const handleItemSelect = (item: Item) => {
    setItem(item);
    setIsItemOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="text-center font-bold text-xl">Details</div>
        <div className="w-full h-[1px] bg-primary"></div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex gap-3">
            <span className="font-bold">Id</span>
            <span>:</span>
            <span>#{pokemon.pokemonId}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Name</span>
            <span>:</span>
            <span className="capitalize">{pokemon.name}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Height</span>
            <span>:</span>
            <span>{getHeightString(pokemon.height)}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Weight</span>
            <span>:</span>
            <span>{getWeightString(pokemon.weight)}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="font-bold">Abilities</div>
          <div>:</div>
          <div className="flex gap-2">
            {pokemon.abilities.map((ability) => {
              return (
                <Badge
                  className="cursor-pointer"
                  onClick={() => handleAbilitySelect(ability)}
                >
                  {ability.name}
                </Badge>
              );
            })}
          </div>
        </div>
        {pokemon.heldItems.length > 0 && (
          <div className="flex gap-3">
            <div className="font-bold">Held Items</div>
            <div>:</div>
            <div className="flex gap-2">
              {pokemon.heldItems.map((item) => {
                return (
                  <Badge
                    className="cursor-pointer"
                    onClick={() => handleItemSelect(item)}
                  >
                    {item.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex gap-3">
          <div className="font-bold min-w-fit">Encounter Areas</div>
          <div>:</div>
          <div>
            {pokemon.areaEncounter
              .reduce((acc, area) => {
                return acc + area + ", ";
              }, "")
              .slice(0, -2)}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="font-bold">Forms</div>
          <div>:</div>
          <div className="flex gap-2">
            {Object.keys(pokemon.sprites).map((form) => {
              return (
                <Badge
                  onClick={() => handleSpriteChange(form)}
                  className="cursor-pointer capitalize"
                >
                  {form === pokemon.name
                    ? pokemon.name
                    : form
                        .split("-")
                        .filter((formName) => formName !== pokemon.name)
                        .join(" ")}
                </Badge>
              );
            })}
          </div>
        </div>
        <div className="text-center font-bold text-xl">Training</div>
        <div className="w-full h-[1px] bg-primary"></div>
        <div className="grid grid-cols-2">
          <div className="flex gap-3">
            <span className="font-bold">Catch Rate</span>
            <span>:</span>
            <span>{pokemon.training.catchRate}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Base Happiness</span>
            <span>:</span>
            <span>{pokemon.training.baseHappiness}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Base Experience</span>
            <span>:</span>
            <span>{pokemon.training.baseExperience}</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Hatch Counter</span>
            <span>:</span>
            <span>{pokemon.training.hatchCounter}</span>
          </div>
        </div>
      </div>
      <AbilityDetailsModal
        isOpen={isAbilityOpen}
        onOpenChange={handleAbilityOpenChange}
        ability={ability}
      />
      <ItemDetailsModal
        isOpen={isItemOpen}
        onOpenChange={handleItemOpenChange}
        item={item}
      />
    </>
  );
};

export default PokeDetailsTab;
