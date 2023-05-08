import { Response } from "express";
import { RequestExt } from "../types/express";
import User from "../models/User";

export const profileController = async (req: RequestExt, res: Response) => {
  const email = req.user.id;
  const userData = await User.findOne({ email });
  res.status(200).json({ user: userData });
};
