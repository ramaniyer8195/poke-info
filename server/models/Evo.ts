import mongoose from "mongoose";
import { IEvo } from "../interfaces/schema";

const Schema = mongoose.Schema;

const EvoSchema = new Schema<IEvo>({
  evoId: { type: Number },
  nodes: [
    {
      id: String,
      type: String,
      data: {
        name: String,
        id: Number,
        types: String,
        sprite: String,
        nodeLevel: 0 | 1 | 2,
      },
      position: {
        x: Number,
        y: Number,
      },
    },
  ],
  edges: [
    {
      id: String,
      type: String,
      source: String,
      target: String,
      data: { label: String },
      style: { stroke: String },
    },
  ],
});

export default mongoose.model<IEvo>("Evo", EvoSchema);
