import { RequestHandler } from "express";
import {
  GetPokemonParams,
  GetPokemonQueryParams,
  GetPokemonRes,
  GetPokemonsRes,
} from "../interfaces/controllers";
import Pokemon from "../models/Pokemon";
import Ability from "../models/Ability";
import Evo from "../models/Evo";
import Item from "../models/Item";
import Location from "../models/Location";
import Move from "../models/Move";
import Species from "../models/Species";
import {
  PokemonDetailsData,
  PokemonData,
  PokeNode,
} from "../interfaces/frontendSchema";
import { isPokemonInRegion } from "../utils/pokeUtils";

export const getPokemons: RequestHandler<
  {},
  GetPokemonsRes,
  {},
  GetPokemonQueryParams
> = async (req, res) => {
  const filter = {
    types: req.query.types ? req.query.types.split(",") : [],
    regions: req.query.regions ? req.query.regions.split(",") : [],
    search: req.query.search ? req.query.search : "",
  };

  const pokemonRes = await Pokemon.find({});

  const pokemonsData: PokemonData[] = pokemonRes.map((pokemon) => {
    return {
      name: pokemon.name,
      pokemonId: pokemon.pokemonId,
      types: pokemon.types,
      pokeImage: pokemon.pokeImage,
    };
  });

  const filteredData = pokemonsData
    .filter((pokemon) => {
      if (filter.search !== "") {
        return pokemon.name.toLowerCase().includes(filter.search.toLowerCase());
      }

      return true;
    })
    .filter((pokemon) => {
      if (filter.types.length > 0) {
        return pokemon.types.some((type) => filter.types.includes(type));
      }

      return true;
    })
    .filter((pokemon) => {
      if (filter.regions.length > 0) {
        return isPokemonInRegion(pokemon.pokemonId, filter.regions);
      }

      return true;
    });

  res.status(200).json({ data: filteredData });
};

export const getPokemon: RequestHandler<
  GetPokemonParams,
  GetPokemonRes
> = async (req, res) => {
  const pokemonId = parseInt(req.params.pokemonId);

  const pokemonRes = await Pokemon.findOne({ pokemonId: { $eq: pokemonId } });
  if (!pokemonRes) {
    res.status(404).json({ data: null, error: "Pokemon not found" });
    return;
  }

  const speciesId = pokemonRes.speciesId;
  const evoId = pokemonRes.evoId;
  const moveIds = pokemonRes.moves;
  const itemIds = pokemonRes.heldItems;
  const locationIds = pokemonRes.areaEncounter;

  const speciesRes = await Species.findOne({ specimenId: { $eq: speciesId } });
  const evoRes = await Evo.findOne({ evoId: { $eq: evoId } });
  const moveRes = await Move.find({ moveId: { $in: moveIds } });
  const itemRes = await Item.find({ itemId: { $in: itemIds } });
  const locationRes = await Location.find({ locationId: { $in: locationIds } });
  const abilityRes = [];

  for (const ability of pokemonRes.abilities) {
    const abilityDbRes = await Ability.findOne({
      abilityId: ability.abilityId,
    });
    if (!abilityDbRes) {
      throw new Error("Ability not found");
    }

    abilityRes.push({
      name: abilityDbRes.name,
      hidden: ability.hidden,
      desc: abilityDbRes.desc,
      abilityId: ability.abilityId,
    });
  }

  if (speciesRes && evoRes) {
    const pokeNodes: PokeNode[] = [];
    for (const node of evoRes.nodes) {
      const pokeDetails = await Pokemon.findOne({
        pokemonId: node.data.pokemonId,
      });

      if (pokeDetails) {
        pokeNodes.push({
          id: node.id,
          type: node.type,
          data: {
            id: pokeDetails.pokemonId,
            name: pokeDetails.name,
            types: pokeDetails.types,
            sprite: pokeDetails.pokeImage,
            nodeLevel: node.data.nodeLevel,
          },
          position: node.position,
        });
      }
    }

    const pokemonDetails: PokemonDetailsData = {
      pokemonId: pokemonRes.pokemonId,
      name: pokemonRes.name,
      types: pokemonRes.types,
      color: speciesRes.color,
      height: speciesRes.height,
      weight: speciesRes.weight,
      genera: speciesRes.genera,
      isBaby: speciesRes.isBaby,
      isLegendary: speciesRes.isLegendary,
      isMythical: speciesRes.isMythical,
      training: speciesRes.training,
      sprites: speciesRes.sprites,
      stats: speciesRes.stats,
      abilities: abilityRes,
      heldItems: itemRes,
      areaEncounter: locationRes.map((location) => location.name),
      moves: moveRes,
      evolutionChain: { nodes: pokeNodes, edges: evoRes.edges },
    };

    res.status(200).json({ data: pokemonDetails, error: "" });
  } else {
    res.status(404).json({ data: null, error: "Pokemon not found" });
  }
};
