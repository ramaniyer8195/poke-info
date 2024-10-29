import mongoose from "mongoose";
import { IEvo } from "../interfaces/schema";

const Schema = mongoose.Schema;

const EvoSchema = new Schema<IEvo>({
  evoId: { type: Number, required: true },
  nodes: [
    {
      id: { type: String, required: true },
      type: { type: String, required: true },
      data: {
        pokemonId: { type: Number, required: true },
        nodeLevel: { type: Number, required: true },
      },
      position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true },
      },
    },
  ],
  edges: [
    {
      id: { type: String, required: true },
      type: { type: String, required: true },
      source: { type: String, required: true },
      target: { type: String, required: true },
      data: { label: { type: String, required: true } },
      style: { type: Object, required: true },
    },
  ],
});

export default mongoose.model<IEvo>("Evo", EvoSchema);
