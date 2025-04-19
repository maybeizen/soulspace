import { Schema, model, Types } from "mongoose";

const moodSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    mood: { type: String, trim: true },
    note: { type: String, trim: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default model("Mood", moodSchema);
