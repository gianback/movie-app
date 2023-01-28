import { Request, Response } from "express";
import { registerNewUser } from "../libs/auth";

export const registerController = async (req: Request, res: Response) => {
  const newUser = req.body;
  const responseUser = await registerNewUser(newUser);
  res.send(responseUser);
};

export const loginController = async (_req: Request, _res: Response) => {
  //   const { email, password } = req.body;
  // const responseLogin = await loginUser(req.body);
};
