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
  return {
    attack: {
      "0x": ["water", "fire", "fairy"],
      "0.25x": ["bug", "psychic", "steel"],
      "0.5x": ["dragon", "grass", "normal", "electric"],
      "2x": ["ice", "poison", "fighting", "ground"],
      "4x": ["flying", "rock", "ghost", "dark"],
    },
    defense: {
      "0x": ["water", "fire", "fairy"],
      "0.25x": ["bug", "psychic", "steel"],
      "0.5x": ["dragon", "grass", "normal", "electric"],
      "2x": ["ice", "poison", "fighting", "ground"],
      "4x": ["flying", "rock", "ghost", "dark"],
    },
  };
};

export const getFormNameFromPokemonName = (name: string): string => {
  return name.toLowerCase().replace(" ", "-");
};
