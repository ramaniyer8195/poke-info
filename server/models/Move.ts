import mongoose from "mongoose";
import { IMove } from "../interfaces/schema";

const Schema = mongoose.Schema;

const MoveSchema = new Schema<IMove>({
  name: { type: String },
  desc: { type: String },
  moveId: { type: Number },
  accuracy: { type: Number },
  pp: { type: Number },
  power: { type: Number },
  priority: { type: Number },
  type: { type: String },
});

export default mongoose.model<IMove>("Move", MoveSchema);
