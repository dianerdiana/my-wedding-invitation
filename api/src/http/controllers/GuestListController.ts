import { NextFunction, Response } from "express";

import { AuthenticatedRequest } from "@libs/AuthenticatedRequest";
import { CreateGuestListInput, createGuestListSchema } from "./../validations/GuestListValidation";
import { db } from "@config/db";
import { UnauthorizedError } from "@libs/errors/UnauthorizedError";

type InputGuestList = {
  data: CreateGuestListInput;
};

export const createGuestList = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = req.body as InputGuestList;
    const userId = req.user?.userId;

    await createGuestListSchema.parseAsync(data);

    if (!userId) {
      throw new UnauthorizedError("Unauthenticated User!");
    }

    const newGuestList = await db.guestList.createMany({
      data: data.map((dta) => ({
        ...dta,
        userId,
      })),
    });

    res.status(201).json({
      error: false,
      message: "success",
      data: newGuestList,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllGuestList = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const allGuestList = await db.guestList.findMany({
      where: {
        userId: req.user?.userId,
      },
    });

    res.status(200).json({
      error: false,
      message: "success",
      data: allGuestList,
    });
  } catch (error) {
    next(error);
  }
};
