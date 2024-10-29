import { TabProps } from "@/interfaces/home";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { getTypeChart } from "@/utils/pokeUtils";
import { TYPE_IMAGES } from "@/constants/pokeConstants";

const PokeTypingTab = ({ pokemon }: TabProps) => {
  const [stats, setStats] = useState(pokemon.stats);
  const [typeChart, setTypeChart] = useState<{
    attack: { [key: string]: string[] };
    defense: { [key: string]: string[] };
  }>({ attack: {}, defense: {} });

  useEffect(() => {
    const maxStat = Math.max(
      pokemon.stats.hp,
      pokemon.stats.speed,
      pokemon.stats.attack,
      pokemon.stats.defense,
      pokemon.stats.specialAttack,
      pokemon.stats.specialDefense
    );

    setStats({
      hp: (pokemon.stats.hp / maxStat) * 100,
      speed: (pokemon.stats.speed / maxStat) * 100,
      attack: (pokemon.stats.attack / maxStat) * 100,
      defense: (pokemon.stats.defense / maxStat) * 100,
      specialAttack: (pokemon.stats.specialAttack / maxStat) * 100,
      specialDefense: (pokemon.stats.specialDefense / maxStat) * 100,
    });

    setTypeChart(getTypeChart(pokemon.types));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-center font-bold font-display text-xl">Stats</div>
      <div className="w-full h-[1px] bg-primary"></div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex gap-3 items-center">
          <span className="font-bold font-display min-w-32">Health</span>
          <span>:</span>
          <span>{pokemon.stats.hp}</span>
          <Progress className="h-3" value={stats.hp} />
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-bold font-display min-w-32">Speed</span>
          <span>:</span>
          <span>{pokemon.stats.speed}</span>
          <Progress className="h-3" value={stats.speed} />
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-bold font-display min-w-32">Attack</span>
          <span>:</span>
          <span>{pokemon.stats.attack}</span>
          <Progress className="h-3" value={stats.attack} />
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-bold font-display min-w-32">Defense</span>
          <span>:</span>
          <span>{pokemon.stats.defense}</span>
          <Progress className="h-3" value={stats.defense} />
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-bold font-display min-w-32">
            Special Attack
          </span>
          <span>:</span>
          <span>{pokemon.stats.specialAttack}</span>
          <Progress className="h-3" value={stats.specialAttack} />
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-bold font-display min-w-32">
            Special Defense
          </span>
          <span>:</span>
          <span>{pokemon.stats.specialDefense}</span>
          <Progress className="h-3" value={stats.specialDefense} />
        </div>
      </div>
      <div className="text-center font-bold font-display text-xl">Typing</div>
      <div className="w-full h-[1px] bg-primary"></div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <div className="font-bold font-display text-lg">Attack</div>
          {Object.keys(typeChart.attack).map((effect) => (
            <div className="flex gap-5 border-b-[1px] pb-1 border-primary items-center">
              <div className="min-w-16">{effect}</div>
              <div className="flex gap-2">
                {typeChart.attack[effect].map((type) => (
                  <img className="h-5" src={TYPE_IMAGES[type].image} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold font-display text-lg">Defense</div>
          {Object.keys(typeChart.attack).map((effect) => (
            <div className="flex gap-5 border-b-[1px] pb-1 border-primary items-center">
              <div className="min-w-16">{effect}</div>
              <div className="flex gap-2">
                {typeChart.attack[effect].map((type) => (
                  <img className="h-5" src={TYPE_IMAGES[type].image} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeTypingTab;
