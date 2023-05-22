import { ObjectId } from "mongoose";

export interface IMovie {
  title: string;
  description: string;
  image_primary: ImageCloudinary;
  image_secondary: ImageCloudinary;
  comments: Comment[];
}

type ImageCloudinary = {
  public_id: string;
  secure_udl: string;
};

export type Comment = {
  content: string;
  date: Date;
  qualification: string;
  movieId: ObjectId;
};
