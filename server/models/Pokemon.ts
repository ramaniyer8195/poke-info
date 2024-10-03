import mongoose from "mongoose";
import { IPokemon } from "../interfaces/schema";

const PokemonSchema = new mongoose.Schema<IPokemon>({
  name: { type: String },
});

export default mongoose.model<IPokemon>("Pokemon", PokemonSchema);
