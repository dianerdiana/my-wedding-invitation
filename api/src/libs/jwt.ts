import jwt from "jsonwebtoken";
import { UnauthorizedError } from "./errors/UnauthorizedError";
import { ENV } from "../config/env";

export const generateToken = (userId: number, username: string) => {
  if (!ENV.JWT_SECRET) {
    throw new UnauthorizedError("JWT secret is not defined.");
  }

  return jwt.sign({ userId, username }, ENV.JWT_SECRET, { expiresIn: "1d" }); // eslint-disable-line
};

export const verifyToken = (token: string) => {
  if (!ENV.JWT_SECRET) {
    throw new UnauthorizedError("JWT secret is not defined.");
  }

  return jwt.verify(token, ENV.JWT_SECRET);
};
