import { comparePassword } from "./../../libs/password";
import { db } from "./../../config/db";
import { BadRequestError } from "./../../libs/errors/BadRequestError";
import { NextFunction, Request, Response } from "express";
import { loginSchema, LoginInput } from "../validations/AuthValidation";
import { generateToken } from "../../libs/jwt";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password }: LoginInput = req.body;

    // Validate Input
    await loginSchema.parseAsync({ username, password });

    // Start Transaction
    const user = await db.user.findUnique({
      where: { username },
      select: {
        id: true,
        fullName: true,
        username: true,
        password: true,
      },
    });

    const isMatch = await comparePassword(password, user ? user.password : "");

    if (!user || !isMatch) {
      throw new BadRequestError("Username and Password do not match.");
    }

    const userToken = generateToken(user.id, user.username);

    res.status(200).json({
      error: false,
      status: "success",
      data: {
        id: user.id,
        fullName: user.fullName,
        username: user.username,
        authToken: userToken,
      },
    });
  } catch (error) {
    next(error);
  }
};
