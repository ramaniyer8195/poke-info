export const isPokemonInRegion = (
  pokemonId: number,
  regions: string[]
): boolean => {
  let isInRegion = false;

  regions.map((region) => {
    if (isInRegion) return;

    const pokemonRange = getPokemonRange(region);

    if (pokemonId >= pokemonRange[0] && pokemonId <= pokemonRange[1]) {
      isInRegion = true;
      return;
    }
  });

  return isInRegion;
};

const getPokemonRange = (region: string): number[] => {
  switch (region) {
    case "kanto": {
      return [1, 151];
    }
    case "johto": {
      return [152, 251];
    }
    case "hoenn": {
      return [252, 386];
    }
    case "sinnoh": {
      return [387, 493];
    }
    case "unova": {
      return [494, 649];
    }
    case "kalos": {
      return [650, 721];
    }
    case "alola": {
      return [722, 809];
    }
    case "galar": {
      return [810, 905];
    }
    case "paldea": {
      return [906, 1025];
    }
    default: {
      return [0, 0];
    }
  }
};
