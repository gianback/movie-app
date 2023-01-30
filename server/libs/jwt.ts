import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.10101";
export const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2hr",
  });
  return jwt;
};

export const verifyToken = async (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};
