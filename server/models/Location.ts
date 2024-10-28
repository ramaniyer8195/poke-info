import mongoose from "mongoose";
import { ILocation } from "../interfaces/schema";

const Schema = mongoose.Schema;

const LocationSchema = new Schema<ILocation>({
  name: { type: String },
  locationId: { type: Number },
});

export default mongoose.model<ILocation>("Location", LocationSchema);
