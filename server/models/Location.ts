import mongoose from "mongoose";
import { ILocation } from "../interfaces/schema";

const Schema = mongoose.Schema;

const LocationSchema = new Schema<ILocation>({
  name: { type: String, required: true },
  locationId: { type: Number, required: true },
});

export default mongoose.model<ILocation>("Location", LocationSchema);
