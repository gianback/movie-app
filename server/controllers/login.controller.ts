import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

export const registerController = async (req: Request, res: Response) => {
  const newUser = req.body;
  const responseUser = await registerNewUser(newUser);

  res.send(responseUser);
};

export const loginController = async (req: Request, res: Response) => {
  const { login } = req.body;
  const userLogin = await loginUser(login);
  res.send(userLogin);
};
