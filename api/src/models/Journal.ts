import { Schema, model, Types } from "mongoose";

const journalSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    title: { type: String, trim: true },
    content: { type: String },
    tags: { type: [String], default: [] },
    date: { type: Date, default: Date.now },
    public: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model("Journal", journalSchema);
