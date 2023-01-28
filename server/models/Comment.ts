import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  commend: {
    type: Boolean,
    required: true,
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "movie",
  },
});

export default mongoose.model("comment", commentSchema);
