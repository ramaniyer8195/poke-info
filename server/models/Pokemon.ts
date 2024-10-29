import mongoose, { Types } from "mongoose";
import { IPokemon } from "../interfaces/schema";

const Schema = mongoose.Schema;

const PokemonSchema = new Schema<IPokemon>({
  name: { type: String, required: true },
  pokemonId: { type: Number, required: true },
  types: [{ type: String, required: true }],
  pokeImage: { type: String, required: true },
  speciesId: { type: Number, required: true },
  evoId: { type: Number, required: true },
  moves: [{ type: Number, required: true }],
  abilities: [
    {
      abilityId: { type: Number, required: true },
      hidden: { type: Boolean, required: true },
    },
  ],
  heldItems: [{ type: Number, required: true }],
  areaEncounter: [{ type: Number, required: true }],
});

export default mongoose.model<IPokemon>("Pokemon", PokemonSchema);
