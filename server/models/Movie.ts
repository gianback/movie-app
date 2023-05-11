import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El titulo es obligatorio"],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  image_primary: {
    public_id: String,
    secure_url: String,
  },
  image_secondary: {
    public_id: String,
    secure_url: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

movieSchema.methods.toJSON = function () {
  const { __v, ...movie } = this.toObject();

  return movie;
};

export default mongoose.model("movie", movieSchema);
