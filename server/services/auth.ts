import { Auth, User } from "../interfaces/auth.interface";
import userSchema from "../models/User";
import { encryp, verify } from "./bycript";
import { generateToken } from "./jwt";

export const registerNewUser = async ({ email, password, ...user }: User) => {
  const checkUser = await userSchema.findOne({ email });
  if (checkUser) {
    return "ALREADY USER";
  }
  const passHash = await encryp(password);
  const createUser = await userSchema.create({
    email,
    password: passHash,
    ...user,
  });

  return createUser;
};

export const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await userSchema.findOne({ email });
  if (!checkIs) return { message: "EMAIL_ERROR" };

  const passwordHash = checkIs.password;
  const isCorrect = await verify(password, passwordHash);

  if (!isCorrect) return { message: "PASSWORD_ERROR" };

  const token = generateToken(checkIs.email);
  const data = {
    token,
  };
  return data;
};
