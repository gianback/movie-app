import mongoose, { Schema } from "mongoose";
import { Comment } from "../interfaces/movie.interface";

const commentSchema = new mongoose.Schema<Comment>({
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  qualification: {
    type: String,
    required: true,
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "movie",
  },
});

export default mongoose.model("comment", commentSchema);
