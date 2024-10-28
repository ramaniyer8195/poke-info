import mongoose from "mongoose";
import { IItem } from "../interfaces/schema";

const Schema = mongoose.Schema;

const ItemSchema = new Schema<IItem>({
  name: { type: String },
  desc: { type: String },
  cost: { type: Number },
  sprite: { type: String },
  itemId: { type: Number },
});

export default mongoose.model<IItem>("Item", ItemSchema);
