import {
  REGIONS,
  TYPE_IMAGES,
  TYPE_IMAGES_WHITE,
  TYPES,
} from "@/constants/pokeConstants";
import { Badge } from "../ui/badge";
import { MouseEventHandler, useState } from "react";
import PokeGrid from "./PokeGrid";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdSearch } from "react-icons/md";
const PokemonList = () => {
  const [regions, setRegions] = useState(
    REGIONS.map((region) => ({ name: region, selected: false }))
  );
  const [types, setTypes] = useState(
    TYPES.map((type) => ({ name: type, selected: false }))
  );

  const onRegionClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const selectedValue = e.currentTarget.textContent;
    const updatedRegions = regions.map((region) => {
      if (region.name === selectedValue) {
        return { ...region, selected: !region.selected };
      } else {
        return region;
      }
    });

    setRegions(updatedRegions);
  };

  const onTypeClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const selectedValue = e.currentTarget.textContent;
    const updatedTypes = types.map((type) => {
      if (type.name === selectedValue) {
        return { ...type, selected: !type.selected };
      } else {
        return type;
      }
    });

    setTypes(updatedTypes);
  };

  return (
    <>
      <div className="flex gap-10">
        <div className="w-[15%] flex flex-col gap-6">
          <div className="flex gap-2">
            <Input type="text" placeholder="Search..." />
            <Button className="text-lg p-2">
              <MdSearch />
            </Button>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Region</h1>
            <div className="flex flex-wrap gap-1.5">
              {regions.map((region) => {
                return (
                  <Badge
                    className={`capitalize text-sm px-3 py-1 cursor-pointer ${
                      region.selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                    onClick={onRegionClick}
                  >
                    {region.name}
                  </Badge>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Types</h1>
            <div className="flex flex-wrap gap-1.5">
              {types.map((type) => {
                return (
                  <Badge
                    className={`capitalize text-sm px-3 py-1 cursor-pointer flex gap-2 justify-center bg-black ${
                      type.selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                    onClick={onTypeClick}
                  >
                    <img
                      src={
                        type.selected
                          ? TYPE_IMAGES_WHITE[type.name].image
                          : TYPE_IMAGES[type.name].image
                      }
                      className="w-4"
                    />
                    {type.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[85%] h-[87vh] overflow-auto">
          <PokeGrid />
        </div>
      </div>
    </>
  );
};

export default PokemonList;
