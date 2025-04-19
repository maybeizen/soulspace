import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true }, // internal UUID
    name: { type: String },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },

    privacy: {
      public: { type: Boolean, default: false },
    },

    // 🧑 Embedded Profile
    profile: {
      name: {
        first: { type: String, default: "", trim: true },
        last: { type: String, default: "", trim: true },
        nick: { type: String, default: "", trim: true },
        display: { type: String, default: "", trim: true },
      },
      bio: { type: String, default: "", trim: true },
      avatar: { type: String, default: "" },
      location: { type: String, default: "", trim: true },
    },

    // 🔗 References to external models
    journals: [{ type: Types.ObjectId, ref: "Journal" }],
    moods: [{ type: Types.ObjectId, ref: "Mood" }],
    memories: [{ type: Types.ObjectId, ref: "Memory" }],
    friends: [{ type: Types.ObjectId, ref: "Friend" }],

    // ⚙️ Optional inline settings
    settings: {
      theme: { type: String, default: "light" },
      notifications: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
