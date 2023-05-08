import { Request } from "express";

export interface CommentContrat {
  description: string;
  commend: boolean;
}

export interface MovieInterface {
  _id: string;
  title: string;
  description: string;
  image_primary?: string;
  image_secondary?: string;
  comments?: Array<string>;
}

export interface RequestExt extends Request {
  user?: any;
}
