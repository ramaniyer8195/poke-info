import mongoose from "mongoose";
import { IAbility } from "../interfaces/schema";

const Schema = mongoose.Schema;

const AbilitySchema = new Schema<IAbility>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  abilityId: { type: Number, required: true },
});

export default mongoose.model<IAbility>("Ability", AbilitySchema);
