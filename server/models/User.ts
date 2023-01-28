import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/auth.interface";

const userSchema = new Schema<User>(
  {
    email: {
      require: true,
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      require: true,
      type: String,
    },
    name: {
      require: true,
      type: String,
    },
    description: {
      type: String,
      default: "description",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("users", userSchema);
