import mongoose from "mongoose";
import { IItem } from "../interfaces/schema";

const Schema = mongoose.Schema;

const ItemSchema = new Schema<IItem>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  cost: { type: Number, required: true },
  sprite: { type: String, required: true },
  itemId: { type: Number, required: true },
});

export default mongoose.model<IItem>("Item", ItemSchema);
