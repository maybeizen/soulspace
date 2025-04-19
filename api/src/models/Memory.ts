import { Schema, model, Types } from "mongoose";

const memorySchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    quote: { type: String, trim: true },
    author: { type: String, trim: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default model("Memory", memorySchema);
