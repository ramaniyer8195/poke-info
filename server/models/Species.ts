import mongoose, { Types } from "mongoose";
import { ISpecies } from "../interfaces/schema";

const Schema = mongoose.Schema;

const SpeciesSchema = new Schema<ISpecies>({
  specimenId: { type: Number },
  color: { type: String },
  height: { type: Number },
  weight: { type: Number },
  genera: { type: String },
  isBaby: { type: Boolean },
  isLegendary: { type: Boolean },
  isMythical: { type: Boolean },
  training: {
    catchRate: { type: Number },
    baseHappiness: { type: Number },
    baseExperience: { type: Number },
    hatchCounter: { type: Number },
  },
  formSprites: {
    type: mongoose.Schema.Types.Mixed,
    of: {
      regular: { type: String },
      shiny: { type: String },
    },
  },
  stats: {
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    specialAttack: { type: Number },
    specialDefense: { type: Number },
    speed: { type: Number },
  },
});

export default mongoose.model<ISpecies>("Species", SpeciesSchema);
