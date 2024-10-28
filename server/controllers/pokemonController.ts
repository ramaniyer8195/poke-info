import { RequestHandler } from "express";
import {
  GetPokemonDetailsParams,
  GetPokemonDetailsRes,
  GetPokemonsRes,
} from "../interfaces/controllers";
import Pokemon from "../models/Pokemon";
import Ability from "../models/Ability";
import Evo from "../models/Evo";
import Item from "../models/Item";
import Location from "../models/Location";
import Move from "../models/Move";
import Species from "../models/Species";
import { PokemonDetails, PokemonsData } from "../interfaces/frontendSchema";

export const getPokemonsData: RequestHandler<{}, GetPokemonsRes> = async (
  req,
  res
) => {
  const pokemonRes = await Pokemon.find({});

  const pokemonsData = pokemonRes.map((pokemon) => {
    return {
      name: pokemon.name,
      pokemonId: pokemon.pokemonId,
      types: pokemon.types,
      sprite: pokemon.sprite,
    };
  });

  res.status(200).json({ data: { pokemons: pokemonsData } });
};

export const getPokemonDetails: RequestHandler<
  GetPokemonDetailsParams,
  GetPokemonDetailsRes
> = async (req, res) => {
  const pokemonId = parseInt(req.params.pokemonId);

  const pokemonRes = await Pokemon.findOne({ pokemonId: pokemonId });
  if (!pokemonRes) {
    res.status(404).json({ data: null, error: "Pokemon not found" });
    return;
  }

  const speciesId = pokemonRes.speciesId;
  const evoId = pokemonRes.evolutionChain;
  const moveIds = pokemonRes.moves;
  const itemIds = pokemonRes.heldItems;
  const locationIds = pokemonRes.areaEncounter;

  const speciesRes = await Species.findOne({ specimenId: { $eq: speciesId } });
  const evoRes = await Evo.findOne({ evoId: { $eq: evoId } });
  const moveRes = await Move.find({ moveId: { $in: moveIds } });
  const itemRes = await Item.find({ itemId: { $in: itemIds } });
  const locationRes = await Location.find({ locationId: { $in: locationIds } });
  console.log(
    JSON.stringify({
      speciesRes,
      evoRes,
      moveRes,
      itemRes,
      locationRes,
      pokemonRes,
    })
  );
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
      isHidden: ability.isHidden,
      desc: abilityDbRes.desc,
    });
  }

  if (speciesRes && evoRes) {
    const pokemonDetails: PokemonDetails = {
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
      formSprites: Array.from(speciesRes.formSprites).reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {} as { [key: string]: { regular: string; shiny: string } }
      ),
      stats: speciesRes.stats,
      abilities: abilityRes,
      heldItems: itemRes,
      areaEncounter: locationRes.map((location) => location.name),
      moves: moveRes,
      evolutionChain: evoRes,
    };

    res.status(200).json({ data: pokemonDetails, error: "" });
  }

  res.status(404).json({ data: null, error: "Pokemon not found" });
};
