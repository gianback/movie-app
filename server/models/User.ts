import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/auth.interface";

const UserSchema = new Schema<User>(
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
    names: {
      require: true,
      type: String,
    },
    last_names: {
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

UserSchema.methods.toJSON = function () {
  const { password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

export default mongoose.model("users", UserSchema);
