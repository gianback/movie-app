import { NextFunction, Request, Response } from "express";
import { schema } from "../utilities/validator";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUser = req.body;
  const { error } = schema.validate(newUser, {
    abortEarly: false,
  });

  if (error) {
    const errorsFormated = error.details.map((error) => ({
      message: error.message,
      field: error.context?.key,
    }));
    res.json(errorsFormated);
    return;
  }

  next();
};
