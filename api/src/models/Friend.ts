import { Schema, model, Types } from "mongoose";

const friendSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    friend: { type: Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "blocked"],
      default: "pending",
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default model("Friend", friendSchema);
