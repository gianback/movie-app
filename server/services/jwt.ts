import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.10101";
export const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2hr",
  });
  return jwt;
};

export const verifyToken = (jwt: string) => {
  try {
    const isTokenOk = verify(jwt, JWT_SECRET);
    return {
      mssg: "token is valid",
      status: 200,
      token: isTokenOk,
    };
  } catch (error) {
    return {
      mssg: "token is invalid",
      status: 406,
    };
  }
};
