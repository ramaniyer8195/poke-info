import { TYPE_MATCHUPS } from "@/constants/pokeConstants";

export const getHeightString = (height: number): string => {
  const meterHeight = height / 10;
  const feetHeight = meterHeight * 3.281;
  const feet = parseInt(feetHeight.toString().split(".")[0]);
  const inches = Math.ceil(
    parseFloat("." + feetHeight.toString().split(".")[1]) * 12
  );
  return `${meterHeight}m ( ${feet}"${inches}' )`;
};

export const getWeightString = (weight: number): string => {
  const kgWeight = weight / 10;
  const lbWeight = Math.round(kgWeight * 2.205 * 10) / 10;

  return `${kgWeight}kg ( ${lbWeight}lbs )`;
};

export const getTypeChart = (
  types: string[]
): {
  attack: { [key: string]: string[] };
  defense: { [key: string]: string[] };
} => {
  if (types.length === 1) {
    return TYPE_MATCHUPS[types[0]];
  }

  return {
    attack: calculateDualTypeAttack(types),
    defense: calculateDualTypeDefense(types),
  };
};

export const getFormNameFromPokemonName = (name: string): string => {
  return name.toLowerCase().replace(" ", "-");
};

const calculateDualTypeDefense = (types: string[]) => {
  const type1 = types[0];
  const type2 = types[1];
  const defenseEffectiveness: { [key: string]: number } = {};

  const applyEffectiveness = (baseType: string) => {
    const {
      ["0x"]: no_effect,
      ["0.5x"]: less_effective,
      ["2x"]: super_effective,
    } = TYPE_MATCHUPS[baseType].defense;

    no_effect.forEach((type) => {
      defenseEffectiveness[type] = 0;
    });

    super_effective.forEach((type) => {
      if (!(type in defenseEffectiveness)) defenseEffectiveness[type] = 2;
      else defenseEffectiveness[type] *= 2;
    });

    less_effective.forEach((type) => {
      if (!(type in defenseEffectiveness)) defenseEffectiveness[type] = 0.5;
      else defenseEffectiveness[type] *= 0.5;
    });
  };

  applyEffectiveness(type1);
  applyEffectiveness(type2);

  const formattedEffectiveness = formatEffectiveness(defenseEffectiveness);

  return formattedEffectiveness;
};

const calculateDualTypeAttack = (types: string[]) => {
  const type1 = types[0];
  const type2 = types[1];
  const attackEffectiveness: { [key: string]: number } = {};

  const applyAttackEffectiveness = (attackingType: string) => {
    const {
      ["0x"]: no_effect,
      ["0.5x"]: less_effective,
      ["2x"]: super_effective,
    } = TYPE_MATCHUPS[attackingType].attack;

    no_effect.forEach((type) => {
      attackEffectiveness[type] = 0;
    });

    super_effective.forEach((type) => {
      if (!(type in attackEffectiveness)) attackEffectiveness[type] = 2;
      else attackEffectiveness[type] *= 2;
    });

    less_effective.forEach((type) => {
      if (!(type in attackEffectiveness)) attackEffectiveness[type] = 0.5;
      else attackEffectiveness[type] *= 0.5;
    });
  };

  applyAttackEffectiveness(type1);
  applyAttackEffectiveness(type2);

  const formattedEffectiveness = formatEffectiveness(attackEffectiveness);

  return formattedEffectiveness;
};

const formatEffectiveness = (effectiveness: { [key: string]: number }) => {
  const formattedEffectiveness = {
    "0x": [] as string[],
    "0.5x": [] as string[],
    "2x": [] as string[],
  };

  for (const [type, multiplier] of Object.entries(effectiveness)) {
    if (multiplier === 0) {
      formattedEffectiveness["0x"].push(type);
    } else if (multiplier < 1) {
      formattedEffectiveness["0.5x"].push(type);
    } else if (multiplier > 1) {
      formattedEffectiveness["2x"].push(type);
    }
  }

  return formattedEffectiveness;
};
