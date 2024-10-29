import mongoose, { SchemaTypes } from "mongoose";
import { ISpecies } from "../interfaces/schema";

const Schema = mongoose.Schema;

const SpeciesSchema = new Schema<ISpecies>({
  specimenId: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  genera: { type: String, required: true },
  color: { type: String, required: true },
  isBaby: { type: Boolean, required: true },
  isLegendary: { type: Boolean, required: true },
  isMythical: { type: Boolean, required: true },
  training: {
    catchRate: { type: Number, required: true },
    baseHappiness: { type: Number, required: true },
    baseExperience: { type: Number, required: true },
    hatchCounter: { type: Number, required: true },
  },
  stats: {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    speed: { type: Number, required: true },
    specialAttack: { type: Number, required: true },
    specialDefense: { type: Number, required: true },
  },
  sprites: {
    type: SchemaTypes.Mixed,
    of: {
      regular: { type: String },
      shiny: { type: String },
    },
    required: true,
  },
});

export default mongoose.model<ISpecies>("Species", SpeciesSchema);
