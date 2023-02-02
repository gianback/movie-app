import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../libs/jwt";

interface RequestExtend extends Request {
  user?: string | JwtPayload;
}

export const checkJwt = (
  req: RequestExtend,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtUser = req.headers.authorization || null;
    const jwt = jwtUser?.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);

    if (!isUser) {
      res.status(401).send({ message: "token invalido" });
    } else {
      req.user = isUser;
      req.user = isUser;
    }
    next();
  } catch (error) {
    res.status(400).send({ message: "Session not valid" });
  }
};
