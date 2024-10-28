import mongoose from "mongoose";
import { IAbility } from "../interfaces/schema";

const Schema = mongoose.Schema;

const AbilitySchema = new Schema<IAbility>({
  desc: { type: String },
  name: { type: String },
  abilityId: { type: Number },
});

export default mongoose.model<IAbility>("Ability", AbilitySchema);
