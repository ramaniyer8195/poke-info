import mongoose from "mongoose";
import { IMove } from "../interfaces/schema";

const Schema = mongoose.Schema;

const MoveSchema = new Schema<IMove>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  moveId: { type: Number, required: true },
  accuracy: { type: Number, required: true },
  pp: { type: Number, required: true },
  power: { type: Number, required: true },
  priority: { type: Number, required: true },
  type: { type: String, required: true },
});

export default mongoose.model<IMove>("Move", MoveSchema);
