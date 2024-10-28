import mongoose from "mongoose";
import { IPokemon } from "../interfaces/schema";

const PokemonSchema = new mongoose.Schema<IPokemon>({
  pokemonId: { type: Number },
  name: { type: String },
  types: [{ type: String }],
  sprite: { type: String },
  speciesId: { type: Number },
  abilities: [
    {
      abilityId: { type: Number },
      isHidden: { type: Boolean },
    },
  ],
  heldItems: [{ type: Number }],
  areaEncounter: [{ type: Number }],
  moves: [{ type: Number }],
  evolutionChain: { type: Number },
});

export default mongoose.model<IPokemon>("Pokemon", PokemonSchema);
