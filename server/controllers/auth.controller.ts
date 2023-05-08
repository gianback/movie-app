import { Request, Response } from "express";
import { generateToken, loginUser, registerNewUser } from "../services";

export const registerController = async (req: Request, res: Response) => {
  const newUser = req.body;
  const userCreated = await registerNewUser(newUser);
  const token = generateToken(newUser);

  res.status(201).json({ user: userCreated, status: 201, token });
};

export const loginController = async (req: Request, res: Response) => {
  const { user } = req.body;
  const userLoged = await loginUser(user);
  res.status(200).json(userLoged);
};
