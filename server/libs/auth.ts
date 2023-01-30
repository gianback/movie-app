import { Auth, User } from "../interfaces/auth.interface";
import userSchema from "../models/User";
import { encryp, verify } from "../libs/bycript";
import { generateToken } from "./jwt";

export const registerNewUser = async ({ email, password, name }: User) => {
  const checkUser = await userSchema.findOne({ email: email });
  if (checkUser) {
    return "ALREADUSER";
  }
  const passHash = await encryp(password);
  const registerNewUser = await userSchema.create({
    email,
    password: passHash,
    name,
  });

  return registerNewUser;
};

export const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await userSchema.findOne({ email });
  if (!checkIs) return "NOT_FOUND_EMAIL";

  const passwordHash = checkIs.password;
  const isCorrect = await verify(password, passwordHash);

  if (!isCorrect) return "PASSWORD_ERROR";

  const token = generateToken(checkIs.id);

  return token;
};
