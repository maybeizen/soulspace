import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },

    privacy: {
      public: { type: Boolean, default: false },
    },

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

    journals: [
      {
        title: { type: String, default: "", trim: true },
        content: { type: String, default: "" },
        tags: { type: [String], default: [] },
        date: { type: Date, default: Date.now },
        public: { type: Boolean, default: false },
      },
    ],

    moods: [
      {
        mood: { type: String, default: "", trim: true },
        note: { type: String, default: "", trim: true },
        date: { type: Date, default: Date.now },
      },
    ],

    memories: [
      {
        quote: { type: String, default: "", trim: true },
        author: { type: String, default: "", trim: true },
        date: { type: Date, default: Date.now },
      },
    ],

    friends: [
      {
        userId: { type: String, required: true },
        status: {
          type: String,
          enum: ["pending", "accepted", "blocked"],
          default: "pending",
        },
        date: { type: Date, default: Date.now },
      },
    ],

    settings: {
      theme: { type: String, default: "light" },
      notifications: { type: Boolean, default: true },
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
